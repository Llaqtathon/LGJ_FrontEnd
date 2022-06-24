import { Time } from './../../../common/time';
import { Edition } from './../../../models/edition.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MentorsService } from 'src/app/services/mentors.service';
import { MentorAvailab, MentorEd } from './../../../models/mentor-edition.model';
import { Status } from 'src/app/common/status';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-mentors-availab-edit',
  templateUrl: './mentors-availab-edit.component.html',
  styleUrls: ['./mentors-availab-edit.component.css']
})
export class MentorsAvailabEditComponent implements OnInit {
  title = "Editar disponibilidad";
  nomMentor = "";
  mentorId = 0;
  states = Object.keys(Status.status);
  // availabs: MentorAvailab[] = new Array<MentorAvailab>();
  mentor: MentorEd = new MentorEd();
  daysAvailab = new Array<{day:string, date:Date, times:MentorAvailab[]}>();
  mabToRemove = new Array<MentorAvailab>();
  mabToAdd = new Array<MentorAvailab>();
  mabToEdit = new Array<MentorAvailab>();
  today = new Date();
  
  currEdition: Edition = {id:0};

  constructor(private location: Location,
    private mentorService: MentorsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.currEdition = JSON.parse(localStorage.getItem("currEdition")??"");
    // this.currEdition = new Edition();
    // this.currEdition.id = 1;
    // this.currEdition.dateStart = new Date("2014-02-26 00:00:00");
    // this.currEdition.dateEnd = new Date("2014-02-28 00:00:00");
    // console.log(this.currEdition);

    this.route.queryParams
      .subscribe(params => {
        this.nomMentor = params['fullname'];
      });
    this.mentorId = parseInt(this.route.snapshot.paramMap.get('id')??'0');
    
    this.setDates();
    this.getAvailabs();

    if(this.mentor.availabilities === undefined)
      this.mentor.availabilities = new Array<MentorAvailab>();
    else {

    }
  }
  
  onBack() { this.location.back(); }

  setDates() {
    this.mentor.status = 'NULO';
    let cDay = this.currEdition.dateStart ? new Date(this.currEdition.dateStart) : new Date();
    let days = Time.getDiasOrd(cDay,this.currEdition.dateEnd??cDay, false);
    let dates = Time.getDatesOrd(cDay,this.currEdition.dateEnd??cDay);

    days.forEach((d,i) => {
      this.daysAvailab.push({
        day : d, date: dates[i], times : new Array<MentorAvailab>()
      });
    });

    console.log('maed da',this.daysAvailab);
  }

  getAvailabs() {
    this.mentorService.getAvailab(this.currEdition.id??0,this.mentorId)
      .subscribe( availabs => {
        availabs.sort( (a:MentorAvailab, b:MentorAvailab) => {
          a.dateStart = new Date(a.dateStart??this.today);
          b.dateStart = new Date(b.dateStart??this.today);
          return (a.dateStart?.getTime()??0) - (b.dateStart?.getTime()??0)
        } );
        availabs.forEach(a => {
          this.daysAvailab
            .filter( d => {return this.checkDays(d.date,a.dateStart)} )[0]
            .times.push(a);
          this.mabToEdit.push(a);
        });
        console.log('mae availabs',availabs);
      });
  }

  // this.checkDays(d.date,day)
  

  addElement(day: Date) {
    let mab = new MentorAvailab();
    mab.dateStart = day;
    mab.dateEnd = day;
    this.mabToAdd.push(mab);
    // console.log('maed',this.daysAvailab.filter( (d) => {return d.date === day} ));
    this.daysAvailab.filter( (d) => {return this.checkDays(d.date,day)} )[0].times.push(mab);
    // this.mentor.availabilities?.push(new MentorAvailab());
  }
  
  remove(ma : MentorAvailab, day: Date) {
    this.mabToRemove.push(ma);
    this.daysAvailab.filter( (d) => { return this.checkDays(d.date,day) } )[0].times
      = this.daysAvailab.filter( (d) => { return this.checkDays(d.date,day) } )[0].times
        .filter((t)=>{ return t != ma });
    // this.mentor.availabilities = this.mentor.availabilities?.filter(function(item) {return item !== ma});
  }

  checkDays(day1:Date, day2:Date|undefined) {
    if (day1 && day2) {
      day1 = new Date(day1);
      day2 = new Date(day2);
      return day1.getDate() === day2.getDate() && day1.getMonth() === day2.getMonth();
    }
    else return false;
  }



  save() {
    // this.mentorService.create(this.mentor)
    //   .subscribe((m: MentorEd) => (
    //     this.router.navigate( ['/'], { relativeTo: this.route.parent }) ));
    this.mentorService.updateInEdition(
      this.currEdition.id??0,{mentorId:this.mentorId, status:this.mentor.status+''}
    ).subscribe(()=>{
      this.mentorService.updateAvailab({
        mentorId : this.mentorId,
        editionId : this.currEdition.id,
        availabilities: this.mabToEdit
      }).subscribe(() => {
        this.mentorService.createAvailab({
          mentorId : this.mentorId,
          editionId : this.currEdition.id,
          availabilities : this.mabToAdd,
        }).subscribe(()=>{
          this.mentorService.deleteAvailabs(
            this.mabToRemove.map(a=>a.id??0)).subscribe(() => {
              this.router.navigate( ['../../'], { relativeTo: this.route } )
              // this.router.navigate( ['../../'], { relativeTo: this.route } )
          });
        });
      });
    });
    console.log('maec', this.mabToEdit, this.mabToAdd, this.mabToRemove);
    // 
  }

}

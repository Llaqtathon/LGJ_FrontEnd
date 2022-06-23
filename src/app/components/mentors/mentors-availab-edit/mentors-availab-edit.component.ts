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
  states = Object.keys(Status.status);
  // availabs: MentorAvailab[] = new Array<MentorAvailab>();
  mentor: MentorEd = new MentorEd();
  daysAvailab = new Array<{day:string, date:Date, times:MentorAvailab[]}>();
  mabToRemove = new Array<MentorAvailab>();
  mabToAdd = new Array<MentorAvailab>();
  
  currEdition: Edition = {id:0};

  constructor(private location: Location,
    private mentorService: MentorsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.mentor.status = 'NULO';
    this.currEdition = JSON.parse(localStorage.getItem("currEdition")??"");
    let cDay = this.currEdition.dateStart ? new Date(this.currEdition.dateStart) : new Date();
    let days = Time.getDiasOrd(cDay,this.currEdition.dateEnd??cDay, false);
    let dates = Time.getDatesOrd(cDay,this.currEdition.dateEnd??cDay);

    days.forEach((d,i) => {
      this.daysAvailab.push({
        day : d, date: dates[i], times : new Array<MentorAvailab>()
      });
    });

    console.log('maed da',this.daysAvailab);

    if(this.mentor.availabilities === undefined)
      this.mentor.availabilities = new Array<MentorAvailab>();
    else {

    }
  }

  onBack() { this.location.back(); }

  
  save() {
    // this.mentorService.create(this.mentor)
    //   .subscribe((m: MentorEd) => (
    //     this.router.navigate( ['/'], { relativeTo: this.route.parent }) ));
    // this.edition.id
  }

  addElement(day: Date) {
    let mab = new MentorAvailab();
    mab.dateStart = day;
    mab.dateEnd = day;
    this.mabToAdd.push();
    // console.log('maed',this.daysAvailab.filter( (d) => {return d.date === day} ));
    this.daysAvailab.filter( (d) => {return d.date === day} )[0].times.push(mab);
    // this.mentor.availabilities?.push(new MentorAvailab());
  }
  
  remove(ma : MentorAvailab, day: Date) {
    this.mabToRemove.push(ma);
    this.daysAvailab.filter( (d) => { return d.date === day} )[0].times
      = this.daysAvailab.filter( (d) => { return d.date === day} )[0].times
        .filter((t)=>{ return t != ma });
    // this.mentor.availabilities = this.mentor.availabilities?.filter(function(item) {return item !== ma});
  }

}

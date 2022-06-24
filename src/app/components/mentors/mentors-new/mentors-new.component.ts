import { MentorArea } from 'src/app/models/mentor-area.model';
import { Mentor, MentorUser } from './../../../models/mentor-user.model';
import { Edition } from './../../../models/edition.model';
import { ItemPriority } from './../../elements/item-priority/item-priority.component';
import { AreaUtils } from './../../../common/areas-utils';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MentorsService } from 'src/app/services/mentors.service';
import { ActivatedRoute, Router } from '@angular/router';

interface Area {
  areaId: number,
  label : string,
  icon : string,
  checked : boolean,
  priority: number,
  yearsOfExp: number
}

@Component({
  selector: 'app-mentors-new',
  templateUrl: './mentors-new.component.html',
  styleUrls: ['./mentors-new.component.css']
})
export class MentorsNewComponent implements OnInit {  
  title = "Nuevo mentor";
  currEdition: Edition = {id:0};
  mentor: Mentor = new Mentor();
  
  //Validation inputs
  textReq = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]);
  yearsFormControl = new FormControl('', [Validators.min(0), Validators.max(40)]);
  emailFormControl = new FormControl('', [Validators.email]);

  // AreasPriority
  lastPrior = 0;
  maxPriorities = 3;
  areas = new Array<Area>();

  constructor(private location: Location,
    private mentorService: MentorsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        // this.type = params['type'];
        // this.updateTitle();
      }
    );
    this.currEdition = JSON.parse(localStorage.getItem("currEdition")??"");

    this.getAreas();
    // this.mentor.phone = "";
    // this.mentor.photoUrl = 'https://pbs.twimg.com/media/FEwlAJxX0A4KrQa?format=png&name=small';
  }

  onBack() { this.location.back(); }

  getAreas() {
    //{id:number, name:string}
    this.mentorService.getAreas().subscribe(_areas => {
      // Object.entries(AreaUtils.areaIcons).map( ([key, val]) => {
      //   return {areaId: 0, label : key, icon : val+'', checked : false, priority:undefined, other: 0}
      // })
      console.log('mnc areas',_areas);
      _areas.forEach(a => {
        this.areas.push({
          areaId : a.id,
          label : a.name,
          icon : AreaUtils.areaIcons[a.name],
          checked : false,
          priority : 0,
          yearsOfExp : 0
        });
      });
    });
  }

  setChecked(area:ItemPriority) {
    if (this.lastPrior < this.maxPriorities && area.checked===false) {
      area.checked = true;
      area.priority = ++this.lastPrior;
    } else if (area.checked) {
      area.checked = false;
      this.areas
        .filter(a => a.priority !== undefined && area.priority !== undefined && a.priority >= area.priority)
        .forEach(a => a.priority? a.priority-- : undefined);
      area.priority = undefined;
      this.lastPrior--;
    }
  }

  save() {
    // console.log(this.mentor);
    let _mAreas : MentorArea[] = this.areas.filter(a => a.checked).map(a => ({
      areaId: a.areaId,
      mentorId: 1,
      yearsOfExperience: a.yearsOfExp,
      priority: AreaUtils.aPriority[a.priority]+''
    }))

    this.mentorService.create(this.mentor)
      .subscribe((m: Mentor) => (
        // console.log()
        this.mentorService.setAreas(m.mentorId?parseInt(m.mentorId):0,_mAreas)
          .subscribe( mas => {
            this.mentorService.createInEdition(this.currEdition.id??0,{
              mentorId : parseInt(m.mentorId??'0'), status: 'NULO'
            }).subscribe(()=>{
              {
                this.router.navigate(
                  [`../availab/${m.mentorId}`],
                  { queryParams: { fullname: m.nombres + ' ' + m.apellidos }, relativeTo: this.route  }
                )
              }
            });
          }
        )
      ));
  }
}

import { ItemTime } from './../../models/item-time.model';
import { Edition } from './../../models/edition.model';
import { MentorAvailab } from './../../models/mentor-availab.model';
import { Time } from './../../common/time';
import { UserGlobalService } from './../../services/user-global.service';
import { MentorTime } from '../../models/mentor-time.model';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { MentorEd } from 'src/app/models/mentor-edition.model';
import { MentorsService } from 'src/app/services/mentors.service';

@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.css']
})
export class MentorsComponent implements OnInit {
  // @Input() event: {id:number, inicio:Date, fin:Date} =
  //          {id:0, inicio:this.week.start, fin:this.week.end};
  title = "Mentores";
  currEdition: Edition = {id:0};
  eventDates: FormGroup = new FormGroup({});
  mentorsPending: MentorEd[] = [];
  mentorsAvailables: ItemTime[] = [];
  editable: boolean = false;

  constructor(
    private ugs: UserGlobalService,
    private mentorsService: MentorsService
    ) {
  }
    
  ngOnInit(): void {
    this.editable = this.ugs.isOrg;
    console.log('E',this.currEdition);
    this.setEventDates();
    this.getMentors();
    // this.mentorsPending = [
    //   { mentorId:1, nombres:"Juan", apellidos:"Perez", areas:[
    //     {areaName: 'ARTE', yearsOfExperience: 3, priority: 'TOP'},
    //     {areaName: 'NARRATIVA', yearsOfExperience: 3, priority: 'TOP'},
    //   ], status:"PENDIENTE"},
    //   { mentorId:3, nombres:"MAria", apellidos:"VBBB", areas:[
    //     {areaName: 'MUSICA', yearsOfExperience: 3, priority: 'TOP'},
    //     {areaName: 'NARRATIVA', yearsOfExperience: 3, priority: 'TOP'},
    //   ], status:"PENDIENTE"},
    // ];
    // this.mentorsAvailables = [
    //   {id:2, responsible:"Carlos Ggggg", areas:[
    //     {areaName: 'PROGRAMACION', yearsOfExperience: 3, priority: 'TOP'},
    //     {areaName: 'GAME DESIGN', yearsOfExperience: 3, priority: 'TOP'},
    //   ], status:"CONFIRMADO", time:{inicio:new Date("2022-05-31T19:22"), fin:new Date("2022-05-31T21:22")}, type:'MENTOR'},
    //   {id:4, responsible:"Josefa AAA", areas:[
    //     {areaName: 'PROGRAMACION', yearsOfExperience: 3, priority: 'TOP'},
    //     {areaName: 'GAME DESIGN', yearsOfExperience: 3, priority: 'TOP'},
    //   ], status:"CONFIRMADO", time:{inicio:new Date("2022-05-31T19:30"), fin:new Date("2022-05-31T23:22")}, type:'MENTOR'},
    // ]
    // static type: string = 'MENTOR';
    // console.log('M',this.event.inicio, this.mentorsAvailables, this.mentorsPending);
  }
  
  setEventDates() {
    // const today = new Date();
    // const month = today.getMonth();
    // const year = today.getFullYear();
    this.eventDates = new FormGroup({
      start: new FormControl(this.currEdition?.dateStart),
      end: new FormControl(this.currEdition?.dateEnd),
    });
  }

  getMentors() {
    if(this.currEdition !== undefined && this.currEdition.id !== undefined) {
      this.mentorsService
        .getByEdition(this.currEdition.id)
        .subscribe((_mentors: MentorEd[]) => (
          _mentors.forEach((m: MentorEd) => {
            if (m.availabilities === undefined || m.availabilities.length === 0) {
              if (this.ugs.isOrg) this.mentorsPending.push( m );
            } else {
              m.availabilities.forEach(t => {
                this.mentorsAvailables.push( this.mToMTime(m, t) );
                // console.log(m,t);
              });
            }
          })
        ));
    }
  }

  mToMTime(mentor: MentorEd, av?: MentorAvailab) {
    if (av !== undefined) {
      return {
        id:mentor.mentorId ? mentor.mentorId : 0,
        responsible:mentor.nombres + ' ' + mentor.apellidos,
        areas:mentor.areas ? mentor.areas : [],
        status:mentor.status,
        time:{
          inicio:av.dateStart ? av.dateStart : new Date(),
          fin:av.dateEnd ? av.dateEnd : new Date()
        },
        type:'MENTOR'
      };
    }
    return new ItemTime();
  }

}

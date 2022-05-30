import { Time } from './../../common/time';
import { UserGlobalService } from './../../services/user-global.service';
import { MentorAvailab } from '../../models/mentor-time.model';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { Mentor } from 'src/app/models/mentor.model';
import { MentorsService } from 'src/app/services/mentors.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.css']
})
export class MentorsComponent implements OnInit {
  week = Time.getSemana();
  @Input() event: {id:number, inicio:Date, fin:Date} =
           {id:0, inicio:this.week.start, fin:this.week.end};
  title = "Mentores";
  eventDates: FormGroup = new FormGroup({});
  mentorsPending: Mentor[] = [];
  mentorsAvailables: MentorAvailab[] = [];
  editable: boolean = false;

  constructor(
    private ugs: UserGlobalService,
    private mentorsService: MentorsService
    ) {
  }
    
  ngOnInit(): void {
    this.editable = this.ugs.isOrg;
    this.setEventDates();
    // this.getMentors();
    this.mentorsPending = [
      {id:1, nombres:"Juan", apellidos:"Perez", areas:["ARTE", "NARRATIVA"], status:"PENDIENTE"},
      {id:3, nombres:"MAria", apellidos:"VBBB", areas:["MUSICA", "NARRATIVA"], status:"PENDIENTE"},
    ];
    this.mentorsAvailables = [
      {id:2, responsible:"Carlos Ggggg", areas:["PROGRAMACION", "GAME DESIGN"], status:"CONFIRMADO", time:{inicio:new Date("2022-05-30T19:22"), fin:new Date("2022-05-30T21:22")}, type:'MENTOR'},
      {id:4, responsible:"Josefa AAA", areas:["PROGRAMACION", "GAME DESIGN"], status:"CONFIRMADO", time:{inicio:new Date("2022-06-03T19:30"), fin:new Date("2022-05-30T23:22")}, type:'MENTOR'},
    ]
      // static type: string = 'MENTOR';
    console.log('M',this.event.inicio, this.mentorsAvailables, this.mentorsPending);
  }
  
  setEventDates() {
    // const today = new Date();
    // const month = today.getMonth();
    // const year = today.getFullYear();
    this.eventDates = new FormGroup({
      start: new FormControl(this.event.inicio),
      end: new FormControl(this.event.fin),
    });
  }

  getMentors() {
    this.mentorsService
      .getAll()
      .subscribe((_mentors: Mentor[]) => (
        _mentors.forEach((m: Mentor) => {
          if (m.tiempos === undefined || m.tiempos.length === 0) {
            if (this.ugs.isOrg) this.mentorsPending.push( m );
          } else {
            m.tiempos.forEach(t => {
              // this.mentorsAvailables.push( this.mToMAvailab(m, t) );
            });
          }
        })
      ));
  }

  mToMAvailab(mentor: Mentor, tiempo?: {inicio:Date, fin:Date}) {
    if (tiempo === undefined) {
      return {id:mentor.id, responsible:mentor.nombres + ' ' + mentor.apellidos,
      areas:mentor.areas, status:mentor.status};
    } 
    return {id:mentor.id, responsible:mentor.nombres + ' ' + mentor.apellidos,
      areas:mentor.areas, status:mentor.status, time:tiempo, type:'MENTOR'};
  }

}

import { MentorAvailab } from './../../models/mentor-ailab.model';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Mentor } from 'src/app/models/mentor.model';
import { MentorsService } from 'src/app/services/mentors.service';

@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.css']
})
export class MentorsComponent implements OnInit {
  title = "Mentores";
  eventDates: FormGroup = new FormGroup({});
  mentorsPending: MentorAvailab[] = [];
  mentorsAvailables: MentorAvailab[] = [];

  constructor(private mentorsService: MentorsService) {
  }

  ngOnInit(): void {
    this.setEventDates();
    // this.getMentors();
    this.mentorsPending = [
      {id:1, nombres:"Juan", apellidos:"Perez", areas:["ARTE", "NARRATIVA"], status:"PENDIENTE"},
    ];
  }
  
  setEventDates() {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    this.eventDates = new FormGroup({
      start: new FormControl(new Date(year, month, today.getDay())),
      end: new FormControl(new Date(year, month, today.getDay()+4)),
    });
  }

  getMentors() {
    this.mentorsService
      .getAll()
      .subscribe((_mentors: Mentor[]) => (
        _mentors.forEach((m: Mentor) => {
          if (m.tiempos === undefined || m.tiempos.length === 0) {
            this.mentorsPending.push( this.mToMAvailab(m) );
          } else {
            m.tiempos.forEach(t => {
              this.mentorsAvailables.push( this.mToMAvailab(m, t) );
            });
          }
        })
      ));
  }

  mToMAvailab(mentor: Mentor, tiempo?: {inicio: string, fin: string}) {
    if (tiempo === undefined) {
      return {id:mentor.id,
        nombres:mentor.nombres, apellidos:mentor.apellidos,
        areas:mentor.areas, status:mentor.status};
    }
    return {id:mentor.id,
      nombres:mentor.nombres, apellidos:mentor.apellidos,
      areas:mentor.areas, status:mentor.status, tiempo:tiempo};
  }

}
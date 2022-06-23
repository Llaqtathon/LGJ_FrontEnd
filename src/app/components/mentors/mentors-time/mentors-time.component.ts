import { MentorAvailab } from './../../../models/mentor-edition.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mentors-time',
  templateUrl: './mentors-time.component.html',
  styleUrls: ['./mentors-time.component.css']
})
export class MentorsTimeComponent implements OnInit {
  @Input() mentorAvailab!:MentorAvailab;
  @Output() toRemove = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit(): void {
  }

  remove():void {
    this.toRemove.emit(true);
  }

}

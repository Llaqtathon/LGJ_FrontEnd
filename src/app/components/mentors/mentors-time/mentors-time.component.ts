import { FormControl, Validators } from '@angular/forms';
import { MentorAvailab } from './../../../models/mentor-edition.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-mentors-time',
  templateUrl: './mentors-time.component.html',
  styleUrls: ['./mentors-time.component.css']
})
export class MentorsTimeComponent implements OnInit {
  @Input() mentorAvailab!:MentorAvailab;
  @Output() mentorAvailabChange = new EventEmitter<MentorAvailab>();
  @Output() toRemove = new EventEmitter<boolean>();
  
  _mab = new MentorAvailab();
  date = '';
  timeStart = "13:00"
  timeEnd = "13:00" //{hh:13, mm:0}
  // _mabTime = {hours:13, minutes:0};
  tomorrow = new Date();
  dIniReq = new FormControl();
  dEndReq = new FormControl();
  
  constructor() { }

  ngOnInit(): void {
    this.tomorrow.setDate(this.tomorrow?.getDate() + 1);
    this.dIniReq = new FormControl('', [Validators.required, Validators.max(this._mab.dateEnd?.getTime() ?? this.tomorrow.getTime() )]);
    this.dEndReq = new FormControl('', [Validators.required, Validators.min(this._mab.dateStart?.getTime() ?? 0 )]);
    // this._mabTime = [
    //   {hours: this.mentorAvailab.dateStart?.getHours() ?? 13,
    //   minutes: this.mentorAvailab.dateStart?.getMinutes() ?? 0},
    //   {hours: this.mentorAvailab.dateEnd?.getHours() ?? 13,
    //   minutes: this.mentorAvailab.dateEnd?.getMinutes() ?? 0},
    // ]
    let today = new Date();
    this._mab = this.mentorAvailab;
    this._mab.dateStart = new Date(this._mab.dateStart??today);
    this._mab.dateEnd = new Date(this._mab.dateEnd??today);
    this.date = moment(this._mab.dateStart).format('YYYY-MM-DD');
    this.timeStart = moment(this._mab.dateStart).format("hh:mm"); //| date:'HH:mm'
    this.timeEnd = moment(this._mab.dateEnd).format("hh:mm");
  }

  remove():void {
    this.toRemove.emit(true);
  }

  edit():void {
    // console.log('mt',this._mab, this.date);
    // console.log('mt',this.mentorAvailab.dateStart, this.timeStart);
    // console.log('mt',this.mentorAvailab.dateEnd, this.timeEnd);
    this._mab.dateStart = new Date( this.date + ' ' + this.timeStart );
    this._mab.dateEnd = new Date( this.date + ' ' + this.timeEnd );
    this.mentorAvailabChange.emit(this._mab);
  }
}

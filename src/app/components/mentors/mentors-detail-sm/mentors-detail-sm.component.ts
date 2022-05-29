import { MentorAvailab } from './../../../models/mentor-ailab.model';
import { Areas } from './../../../common/areas-icons';
import { Component, Input, OnInit } from '@angular/core';
import { Mentor } from 'src/app/models/mentor.model';
import { Status } from 'src/app/common/status';

@Component({
  selector: 'app-mentors-detail-sm',
  templateUrl: './mentors-detail-sm.component.html',
  styleUrls: ['./mentors-detail-sm.component.css']
})
export class MentorsDetailSmComponent implements OnInit {

  @Input() mentor?: MentorAvailab;
  @Input() time?:string;
  @Input() editable:boolean = false;
  areaIcons:string[] = [];
  statusClass:string = "";

  constructor() { }

  ngOnInit(): void {
    this.getAreaIcons();
    this.getStatusClass();
  }

  getStatusClass() {
    if (this.mentor?.status) {
      this.statusClass = Status.status[this.mentor.status];
    }
  }
  getAreaIcons() {
    this.mentor?.areas?.forEach(mentor_area => {
      this.areaIcons.push(Areas.area_icons[mentor_area]);
    });
  }

}

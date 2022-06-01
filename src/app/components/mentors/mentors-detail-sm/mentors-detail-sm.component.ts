import { MentorEd } from 'src/app/models/mentor-edition.model';
import { AreaUtils } from '../../../common/areas-utils';
import { Component, Input, OnInit } from '@angular/core';
import { Status } from 'src/app/common/status';

@Component({
  selector: 'app-mentors-detail-sm',
  templateUrl: './mentors-detail-sm.component.html',
  styleUrls: ['./mentors-detail-sm.component.css']
})
export class MentorsDetailSmComponent implements OnInit {

  @Input() editable:boolean = false;
  @Input() mentor: MentorEd = new MentorEd();
  areaIcons:string[] = [];
  statusClass:string = "";

  constructor() {
  }

  ngOnInit(): void {
    this.areaIcons = AreaUtils.getAreaIcons(this.mentor.areas);
    this.statusClass = Status.getStatusClass(this.mentor.status);
  }

}

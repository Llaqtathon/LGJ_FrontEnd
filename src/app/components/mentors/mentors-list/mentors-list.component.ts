import { MentorAvailab } from './../../../models/mentor-ailab.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mentors-list',
  templateUrl: './mentors-list.component.html',
  styleUrls: ['./mentors-list.component.css']
})
export class MentorsListComponent implements OnInit {
  @Input() mentors?: MentorAvailab[];
  //siempre es editable //solo aparece a los Orgs

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.mentors);
  }


}

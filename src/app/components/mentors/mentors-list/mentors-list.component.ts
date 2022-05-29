import { Component, OnInit, Input } from '@angular/core';
import { Mentor } from 'src/app/models/mentor.model';

@Component({
  selector: 'app-mentors-list',
  templateUrl: './mentors-list.component.html',
  styleUrls: ['./mentors-list.component.css']
})
export class MentorsListComponent implements OnInit {
  @Input() mentors?: Mentor[];

  constructor() {
    console.log('COMPS',this.mentors);
  }

  ngOnInit(): void {
    console.log(this.mentors);
  }


}

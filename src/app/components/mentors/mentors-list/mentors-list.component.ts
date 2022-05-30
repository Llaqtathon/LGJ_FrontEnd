import { Mentor } from 'src/app/models/mentor.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mentors-list',
  templateUrl: './mentors-list.component.html',
  styleUrls: ['./mentors-list.component.css']
})
export class MentorsListComponent implements OnInit {
  @Input() mentors?: Mentor[];
  //siempre es editable //solo aparece a los Orgs

  constructor() {
  }

  ngOnInit(): void {
    console.log('LST',this.mentors);
  }


}

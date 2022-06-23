import { MentorEd } from 'src/app/models/mentor-edition.model';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-mentors-list',
  templateUrl: './mentors-list.component.html',
  styleUrls: ['./mentors-list.component.css']
})
export class MentorsListComponent implements OnInit, OnChanges {
  @Input() mentors?: MentorEd[];
  @Input() filteredName: string = '';
  @Input() checks: string[] = [];
  mentFiltered: MentorEd[] = [];
  //siempre es editable //solo aparece a los Orgs

  constructor() {
  }

  ngOnInit(): void {
    console.log('LST',this.mentors);
    if(this.mentors) this.mentFiltered = this.mentors;
    // if (this.mentors && this.filteredName !== undefined && this.filteredName.length > 2) {
    //   this.mentFiltered = this.mentors
    //         .filter(m =>
    //           (m.nombres+' '+m.apellidos).toLowerCase().includes(this.filteredName.toLowerCase())
    //         );
    // }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filteredName']) {
      if (this.mentors && this.filteredName !== undefined && this.filteredName.length > 2) {
        this.mentFiltered = this.mentors
              .filter(m =>
                (m.nombres+' '+m.apellidos).toLowerCase().includes(this.filteredName.toLowerCase())
              );
        console.log('M LST c',this.mentors,this.filteredName,this.mentFiltered);
      } else {
        this.mentFiltered = this.mentors? this.mentors : [];
        console.log('M LST e',this.mentors,this.filteredName,this.mentFiltered);
      }
      console.log('M LST',this.filteredName);
    }
  }

  


}

import { MicroEvento } from './../../../models/microevento.model';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-microevents-list',
  templateUrl: './microevents-list.component.html',
  styleUrls: ['./microevents-list.component.css']
})
export class MicroeventsListComponent implements OnInit {

  @Input() events: MicroEvento[] = [];
  @Input() types!: string[]; //= ['CHARLA','TALLER'];
  evntFiltered: MicroEvento[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log('LST',this.events, this.types);
    if(this.events) this.evntFiltered = this.events;
  }

  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filteredName']) {
      if (this.events && this.types !== undefined && this.types.length > 0) {
        this.evntFiltered = this.events
              .filter( m => m.tipo in this.types );
        console.log('M LST c',this.events,this.evntFiltered,this.evntFiltered);
      } else {
        this.evntFiltered = this.events?? [];
        console.log('M LST e',this.events,this.evntFiltered,this.evntFiltered);
      }
      console.log('M LST',this.evntFiltered);
    }
  }
}

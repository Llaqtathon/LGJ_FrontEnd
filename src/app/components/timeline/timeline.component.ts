import { Time } from '../../common/time';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { MentorArea } from 'src/app/models/mentor-area.model';
// import { ItemTime } from '../../models/item-time.model';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit, OnChanges { //AfterContentInit
  @Input() dateStart?: Date;
  @Input() dateEnd?: Date;
  // @Input() items?: ItemTime[] = [];
  // @Input() items?: MentorTime[]|MicroEvento[] = [];
  @Input() items?: any[] = [];
  @Input() filteredResp: string = '';
  @Input() checks: string[] = [];
  @Input() editable!: boolean;
  // @Input() bar: Promise<ItemTime[]>;
  // resolve: (items: ItemTime[]) => void;
  week = Time.getSemana();
  drange = {start: this.week.start, end: this.week.end};
  days:string[] = [];
  hours:string[] = [];
  // itemsOrd: ItemTime[] = [];
  itemsOrd: any[] = [];
  // @ContentChildren('item') items!: QueryList<Component>;
  // bar : Promise<ItemTime[]>|undefined;
  // private resolve: Function|undefined;

  constructor() {
    for (let i = 0; i < 24; i++) {
      i < 10? this.hours.push("0" + i) : this.hours.push(i.toString());
    }
    // this.bar = new Promise<ItemTime[]>((resolve, reject) => {
    //   this.resolve = resolve;
    //   console.log('TL constructor',resolve.prototype);
    // });
  }


  ngOnInit(): void {
    if (this.dateStart)  this.drange.start = this.dateStart;
    if (this.dateEnd) this.drange.end = this.dateEnd;
    this.days = Time.getDiasOrd(this.drange.start, this.drange.end);
    if(this.items !== undefined) {
      this.itemsOrd = this.items;
    };
    console.log('TL oi',this.days,this.items);
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filteredResp']) {
      console.log('fr change', changes['filteredResp']);
      if (this.items && this.filteredResp.length > 2) {
        this.itemsOrd = this.itemsOrd
        .filter(m =>
            (m.m.nombres? m.m.nombres + ' ' + m.m.apellidos :
            m.nombrePonente ?? '')?.toLowerCase().includes(this.filteredResp.toLowerCase())
        );
        console.log('TL LST cf',this.items,this.itemsOrd,this.filteredResp);
      } else {
        this.itemsOrd = this.items ?? [];
        console.log('TL LST cn',this.items,this.itemsOrd,this.filteredResp);
      }
    }
    if (changes['checks']) {
      if (this.items && this.checks.length > 0) {
        this.itemsOrd = this.items
        .filter(m =>
          {
            if(m.m) {
              console.log('TL areas', m.m.areas.length);
              for (let i = 0; i < m.m.areas.length; i++) {
                if(m.m.areas[i].areaName && this.checks.includes(m.m.areas[i].areaName)) return true;
              }
              return false;
            }
            else return this.checks.includes(m.tipo);
          }
        );
      } else {
        this.itemsOrd = this.items ?? [];
      }
      console.log('TL LST c',this.checks);
    }
  }

}

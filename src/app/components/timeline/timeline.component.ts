import { MicroevetTime } from './../../models/microevent-time.model';
import { MentorTime } from './../../models/mentor-edition.model';
import { Time } from '../../common/time';
import { AfterContentInit, Component, ContentChildren, Directive, Input, OnInit, QueryList, OnChanges, SimpleChanges } from '@angular/core';
import { MentorsDetailSmComponent } from '../mentors';
import { ItemTime } from '../../models/item-time.model';
import { MicroEvento } from 'src/app/models/microevento.model';
// @Directive({selector: 'mat-card'})
// class Item {
//   @Input() id!: string;
//   // @Input() start!: string;
//   // @Input() end!: string;
// }

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
  week = Time.getSemana();
  drange = {start: this.week.start, end: this.week.end};
  days:string[] = [];
  daysTime:ItemTime[][] = [];
  hours:string[] = [];
  // itemsOrd: ItemTime[] = [];
  itemsOrd: any[] = [];
  @Input() filteredResp: string = '';
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
    this.daysTime = this.days.map(d => []);
    if(this.items !== undefined) {
      this.sort();
      // this.setSizePos();
      this.itemsOrd = this.items;
      // this.itemsOrd = this.items.map(i => ItemTime.toItemTime(i, this.dateStart));
      if(this.items) this.upDateItems(this.items);
    };
    // console.log('TL',this.items,this.dateStart,this.dateEnd);
    console.log('TL oi',this.days,this.items);
  }
  
  // ngOnChanges(): void {
  //   if (this.items !== undefined) {
  //     this.items.sort(
  //       (a:ItemTime, b:ItemTime) => a.time.inicio.getTime() - b.time.inicio.getTime()
  //     );
  //     this.setSizePos();
  //     console.log('TL oc',this.items, this.itemsOrd);
  //     // this.resolve!(this.items);
  //   }
  // }

  // setSizePos() {
  //   let hhmm = (d:Date) => (d.getHours()*100 + ((d.getMinutes()*10)/6))/100;
  //   let dateDiff = (d1:Date, d2:Date) => Math.floor((d2.getTime() - d1.getTime()) / (1000 * 3600 * 24));
  //   const w = 100/this.days.length;
    
  //   console.log('TL setSizePos',this.items);
  //   if (this.items ) { //&& this.items.length > 0
  //     console.log('TL setSizePos ifin',this.items);
  //     for (let index = 0; index < this.items.length; index++) {
  //       const element = this.items[index];
        
  //       console.log('TL setSizePos in',this.items[index]);
  //       let pos = dateDiff(this.drange.start, this.items[index].time.inicio);
        
  //       this.items[index].size = {
  //         w: w - this.daysTime[pos].length,
  //         h: (hhmm(this.items[index].time.fin) - hhmm(this.items[index].time.inicio)) * 4
  //       };
  //       this.items[index].pos = {
  //         x: dateDiff(this.drange.start, this.items[index].time.inicio) * w,
  //         y: hhmm(this.items[index].time.inicio) * 4
  //       };
  //       this.daysTime[pos].push(this.items[index]);
  //       this.itemsOrd.push(this.items[index]);
  //       // console.log(this.dateStart, item.time.inicio);
  //       console.log('TL ss', this.itemsOrd, dateDiff(this.drange.start,this.items[index].time.inicio), w);
  //       // return this.items[index];
  //     }
  //     // this.items.forEach((item) => {
  //     // });
  //   }
  // }
  // setSizePos(): void {
  //   let hhmm = (d:Date) => (d.getHours()*100 + ((d.getMinutes()*10)/6))/100;
  //   let dateDiff = (d1:Date, d2:Date) => Math.floor((d2.getTime() - d1.getTime()) / (1000 * 3600 * 24));
  //   const w = 100/this.days.length;
    
  //   console.log('TL setSizePos',this.items);
  //   if (this.items && this.items.length > 0) {
  //     console.log('TL setSizePos ifin',this.items);
  //     this.items.forEach((item) => {
  //       console.log('TL setSizePos in',item);
  //       let pos = dateDiff(this.drange.start, item.time.inicio);
        
  //       item.size = {
  //         w: w - this.daysTime[pos].length,
  //         h: (hhmm(item.time.fin) - hhmm(item.time.inicio)) * 4
  //       };
  //       item.pos = {
  //         x: dateDiff(this.drange.start, item.time.inicio) * w,
  //         y: hhmm(item.time.inicio) * 4
  //       };
  //       this.daysTime[pos].push(item);
  //       this.itemsOrd.push(item);
  //       // console.log(this.dateStart, item.time.inicio);
  //       console.log('TL ss', this.itemsOrd, dateDiff(this.drange.start,item.time.inicio), w);
  //     });
  //   }
  // }

  sort():void {    
    this.itemsOrd?.sort(
      (a:ItemTime, b:ItemTime) => a.time.inicio.getTime() - b.time.inicio.getTime()
    );
  }
  ngAfterContentInit(){
    console.log('NACI' , this.items);
    if (this.items ) {
      // this.itemsOrd = this.items.map(i => ItemTime.toItemTime(i, this.dateStart));
      if(this.items) this.upDateItems(this.items);
      this.itemsOrd.sort(
        (a:ItemTime, b:ItemTime) => a.time.inicio.getTime() - b.time.inicio.getTime()
      );
      // this.setSizePos();
      console.log('TL aci',this.items, this.itemsOrd);
    }
    // this.itemsOrd = this.items ? this.items : [];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filteredResp']) {
      if (this.items && this.filteredResp !== undefined && this.filteredResp.length > 2) {
        this.itemsOrd = this.itemsOrd
        .filter(m =>
            (m.m.nombres? m.m.nombres + ' ' + m.m.apellidos :
            m.nombrePonente ?? '')?.toLowerCase().includes(this.filteredResp.toLowerCase())
        );
        console.log('TL LST cf',this.items,this.itemsOrd,this.filteredResp);
      } else {
        this.itemsOrd = this.items ?? [];
        // this.itemsOrd = this.items?.map(i => ItemTime.toItemTime(i, this.dateStart)) ??[];
        if(this.items) this.upDateItems(this.items);
        console.log('TL LST cn',this.items,this.itemsOrd,this.filteredResp);
      }
      console.log('TL LST f',this.filteredResp);
    }
    // this.setSizePos();
  }

  upDateItems(items:MentorTime[]|MicroEvento[]) {
    // this.itemsOrd;
    items.forEach(i => {
      // this.itemsOrd.push(ItemTime.toItemTime(i, this.dateStart));
    });
    this.itemsOrd.sort(
      (a:ItemTime, b:ItemTime) => a.time.inicio.getTime() - b.time.inicio.getTime()
    );
    console.log('TL ui',this.items, this.itemsOrd);
  }
}

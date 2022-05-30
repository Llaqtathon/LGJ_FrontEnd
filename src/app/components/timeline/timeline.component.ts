import { Time } from '../../common/time';
import { AfterContentInit, Component, ContentChildren, Directive, Input, OnInit, QueryList } from '@angular/core';
import { MentorsDetailSmComponent } from '../mentors';
import { ItemTime } from '../../models/item-time.model';
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
export class TimelineComponent implements OnInit { //AfterContentInit
  @Input() dateStart!: Date;
  @Input() dateEnd!: Date;
  @Input() items: ItemTime[] = [];
  days:string[] = [];
  daysTime:ItemTime[][] = [];
  hours:string[] = [];
  // @ContentChildren('item') items!: QueryList<Component>;

  constructor() {
    for (let i = 0; i < 24; i++) {
      i < 10? this.hours.push("0" + i) : this.hours.push(i.toString());
    }
  }

  ngOnInit(): void {
    this.days = Time.getDiasOrd(this.dateStart, this.dateEnd);
    this.daysTime = this.days.map(d => []);
    this.sort();
    this.setSizePos();
    // console.log('TL',this.items,this.dateStart,this.dateEnd);
    console.log('TL',this.days,this.daysTime);
  }

  setSizePos(): void {
    // 19:22 = 1922 | (22*10)/6 36.6.. | 1936.6 / 10 = 19.36
    // 21:22 = 2122 | (22*10)/6 36.6.. | 2136.6 / 10 = 21.36
    // 19:30 = 1930 | (30*10)/6 50.0.. | 1950.0 / 10 = 19.5
    let hhmm = (d:Date) => (d.getHours()*100 + ((d.getMinutes()*10)/6))/100;
    let dateDiff = (d1:Date, d2:Date) => Math.floor((d2.getTime() - d1.getTime()) / (1000 * 3600 * 24));
    const w = 100/this.days.length;
    this.items.forEach((item, i) => {
      let pos = dateDiff(this.dateStart, item.time.inicio);
      
      item.size = {
        w: w - this.daysTime[pos].length,
        h: (hhmm(item.time.fin) - hhmm(item.time.inicio)) * 4
      };
      item.pos = {
        x: dateDiff(this.dateStart, item.time.inicio) * w,
        y: hhmm(item.time.inicio) * 4
      };
      this.daysTime[pos].push(item);
      // console.log(this.dateStart, item.time.inicio);
      console.log(dateDiff(this.dateStart,item.time.inicio), w);
    });
  }

  sort():void {    
    this.items.sort(
      (a:ItemTime, b:ItemTime) => a.time.inicio.getTime() - b.time.inicio.getTime()
    );
  }
  // ngAfterContentInit(){
  //   console.log('NACI' , this.items);
  // }

}

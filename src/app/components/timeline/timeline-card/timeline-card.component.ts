import { Time } from './../../../common/time';
import { MicroEvento } from './../../../models/microevento.model';
import { MentorTime } from './../../../models/mentor-edition.model';
import { ItemTime } from './../../../models/item-time.model';
import { Status } from 'src/app/common/status';
import { AreaUtils } from '../../../common/areas-utils';
import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-timeline-card',
  templateUrl: './timeline-card.component.html',
  styleUrls: ['./timeline-card.component.css']
})
export class TimelineCardComponent implements OnInit {
  // @Input() item!: ItemTime;
  // @Input() item!: MentorTime | MicroEvento;
  @Input() item!: any;
  @Input() qdays!: number;
  @Input() dStart!: string;
  @Input() dEnd!: string;
  // @Input() item?: Component;
  areaIcons:string[] = [];
  rangeTime:string = "";
  statusClass:string = "";
  type:string = "";
  title:string = "";
  responsible:string = "";
  assigned:string[] = [];
  social:string[] = [];
  ninscip:number  = 0;
  pos: {x:number, y:number} = {x:0, y:0};
  size: {width:number, height:number} = {width: 100, height:0};

  constructor() { }

  ngOnInit(): void {
    // if(this.item instanceof MentorTime) {
    // }
    if(this.item.m !== undefined) {
      this.responsible = this.item?.m.nombres + " " + this.item?.m.apellidos;
      this.areaIcons = AreaUtils.getAreaIcons(this.item?.m.areas);
      this.statusClass = Status.getStatusClass(this.item?.m.status);
      this.rangeTime = this.toTime(this.item?.t.dateStart) + " - " + this.toTime(this.item?.t.dateEnd);
      // this.rangeTime = this.item?.t.dateStart.substring(11,20) + " - " + this.item?.t.dateEnd.substring(11,20);
      this.pos.y = this.toY(this.item?.t.dateStart);
      this.pos.x = this.toX(this.item?.t.dateStart);
      this.size.height = this.toY(this.item?.t.dateEnd) - this.pos.y;
      this.type = "MENTOR";
      console.log('TLCC',this.item, this.rangeTime);
    }
    this.size.width = 100/this.qdays;
  }

  toTime(date?:any) {
    // console.log('TLCC tt',date.substring(0,19));
    return date.substring(11,16);
    // return date!==undefined ? moment(date.substring(0,20)).format('HH:mm') : "";
    // return date ? new Date(date).toLocaleTimeString().substring(0,5) : "";
  }
  
  toY(date?:any) {
    console.log('y',parseInt(date.substring(11,13)), parseFloat(date.substring(14,16)));
    return Time.formatHHMM(parseInt(date.substring(11,13)), parseFloat(date.substring(14,16)));
  }
  toX(date?:any) { //aaaa-mm-dd
    let day = parseInt(date.substring(8,10));
    console.log('x',day, this.dStart);
    if (day >= parseInt(this.dStart)) { // 1 2 3 | 31 1 2 | 30 31 1 | 29 30 31 |
      return day - parseInt(this.dStart);
    }
    else //if (day < this.dStart) { // 31 1 2 | 30 31 1 2 |
      return this.qdays - (parseInt(this.dEnd) - day) - 1;
    // return Time.formatHHMM(parseInt(date.substring(11,13)), parseFloat(date.substring(14,16)));
  }

}

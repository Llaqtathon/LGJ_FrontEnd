import { User } from './../../../models/user.model';
import { Time } from './../../../common/time';
import { MicroEvento } from './../../../models/microevento.model';
import { MentorTime } from './../../../models/mentor-edition.model';
import { ItemTime } from './../../../models/item-time.model';
import { Status } from 'src/app/common/status';
import { AreaUtils } from '../../../common/areas-utils';
import { Component, Input, OnInit, HostBinding } from '@angular/core';
import * as moment from 'moment';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';


@Component({
  selector: 'app-timeline-card',
  templateUrl: './timeline-card.component.html',
  styleUrls: ['./timeline-card.component.css'],
})
export class TimelineCardComponent implements OnInit {
  
  @HostBinding('style') style: SafeStyle = '';
  @HostBinding('class') statusClass: string = "";
  // @Input() item!: ItemTime;
  // @Input() item!: MentorTime | MicroEvento;
  @Input() item!: any;
  @Input() qdays!: number;
  @Input() dStart!: string;
  @Input() dEnd!: string;
  @Input() editable!: boolean;
  // @Input() item?: Component;
  id:number = 0;
  rangeTime:string = "";
  type:string = "";
  title:string = "";
  responsible:string = "";

  areaIcons:string[] = [];
  assigned:string[] = [];
  
  social:string[] = [];
  ninscrip:number  = 0;
  iminscrip:boolean = false;

  pos: {x:number, y:number} = {x:0, y:0};
  size: {width:number, height:number} = {width: 100, height:0};

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    // if(this.item instanceof MentorTime) {
    // }
    let state = "";

    if (this.item.m !== undefined) {
      this.responsible = this.item?.m.nombres + " " + this.item?.m.apellidos;
      this.areaIcons = AreaUtils.getAreaIcons(this.item?.m.areas);
      state = this.item?.m.status;
      this.rangeTime = this.toTime(this.item?.t.dateStart) + " - " + this.toTime(this.item?.t.dateEnd);
      // this.rangeTime = this.item?.t.dateStart.substring(11,20) + " - " + this.item?.t.dateEnd.substring(11,20);
      this.pos.y = this.toY(this.item?.t.dateStart);
      this.pos.x = this.toX(this.item?.t.dateStart);
      this.size.height = this.toY(this.item?.t.dateEnd) - this.pos.y;
      this.type = "MENTOR";
      // console.log('TLCC',this.item, this.rangeTime);
    }
    else if (this.item.cantInscritos != undefined) {
      this.id = this.item.id;
      this.responsible = this.item.nombrePonente;
      this.type = this.item.tipo;
      if (this.item.tipo === 'CHARLA') {}
      else if (this.item.tipo === 'TALLER') {}
      this.rangeTime = this.toTime(this.item.inicio) + " - " + this.toTime(this.item.fin);
      this.title = this.item.name;
      this.pos.y = this.toY(this.item.inicio);
      this.pos.x = this.toX(this.item.inicio);
      this.size.height = this.toY(this.item.fin) - this.pos.y;
      // description
      // enlaces       : string[] = [];
      this.social = this.item.enlaces;

      this.ninscrip = this.item.cantInscritos;
      this.iminscrip = this.item.imInscripted;
      state = this.item.status;
      this.assigned = this.item.asignados.map((u:User) => u.nombres + " " + u.apellido);
    }
    this.statusClass = this.editable? Status.getStatusClass(state) : 's-null';

    this.size.width = 100/this.qdays;
    let wrand = Math.random() * (this.size.width/200 - 0.01) + 0.01;
    this.pos.x += wrand;

    this.style = this.sanitizer.bypassSecurityTrustStyle(
      `
      z-index: ${Math.floor(this.pos.y)};
      width: ${this.size.width - 5}%;
      height: ${this.size.height * 2.5}em;
      left: ${this.pos.x * this.size.width}%;
      top: ${this.pos.y * 2.5}em;
    `
    );
  }

  toTime(date?:any) {
    // console.log('TLCC tt',date.substring(0,19));
    return date.substring(11,16);
    // return date!==undefined ? moment(date.substring(0,20)).format('HH:mm') : "";
    // return date ? new Date(date).toLocaleTimeString().substring(0,5) : "";
  }
  
  toY(date?:any) {
    // console.log('y',parseInt(date.substring(11,13)), parseFloat(date.substring(14,16)));
    return Time.toNumHHMM(parseInt(date.substring(11,13)), parseFloat(date.substring(14,16)));
  }
  toX(date?:any) { //aaaa-mm-dd
    let day = parseInt(date.substring(8,10));
    // console.log('x',day, this.dStart);
    if (day >= parseInt(this.dStart)) { // 1 2 3 | 31 1 2 | 30 31 1 | 29 30 31 |
      return day - parseInt(this.dStart);
    }
    else //if (day < this.dStart) { // 31 1 2 | 30 31 1 2 |
      return this.qdays - (parseInt(this.dEnd) - day) - 1;
    // return Time.formatHHMM(parseInt(date.substring(11,13)), parseFloat(date.substring(14,16)));
  }

}

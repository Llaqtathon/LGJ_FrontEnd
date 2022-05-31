import { ItemTime } from './../../../models/item-time.model';
import { Status } from 'src/app/common/status';
import { AreaUtils } from '../../../common/areas-utils';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-timeline-card',
  templateUrl: './timeline-card.component.html',
  styleUrls: ['./timeline-card.component.css']
})
export class TimelineCardComponent implements OnInit {
  @Input() item!: ItemTime;
  // @Input() item?: Component;
  areaIcons:string[] = [];
  rangeTime:string = "";
  statusClass:string = "";

  constructor() { }

  ngOnInit(): void {
    this.areaIcons = AreaUtils.getAreaIcons(this.item?.areas);
    this.statusClass = Status.getStatusClass(this.item?.status);
    this.rangeTime = this.toTime(this.item.time.inicio) + " - " + this.toTime(this.item.time.fin);
    console.log('TLCC',this.item);
  }

  toTime(date?:Date) {
    return date ? new Date(date).toLocaleTimeString().substring(0,5)
            : (new Date()).toLocaleTimeString().substring(0,5);
  }

}

import { ItemTime } from './../../../models/item-time.model';
import { Status } from 'src/app/common/status';
import { Areas } from './../../../common/areas-icons';
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
    this.getAreaIcons();
    this.getStatusClass();
    this.rangeTime = this.toTime(this.item.time.inicio) + " - " + this.toTime(this.item.time.fin);
    console.log('TLC',this.item);
  }

  toTime(date?:Date) {
    return date ? date.toLocaleTimeString().substring(0,5)
            : (new Date()).toLocaleTimeString().substring(0,5);
  }
  getAreaIcons() {
    this.item?.areas?.forEach(area => {
      this.areaIcons.push(Areas.areaIcons[area]);
    });
  }
  getStatusClass() {
    if (this.item?.status) {
      this.statusClass = Status.status[this.item?.status];
    }
  }

}

import { Status } from './../../../common/status';
import { MicroEvento } from 'src/app/models/microevento.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-microevents-detail-sm',
  templateUrl: './microevents-detail-sm.component.html',
  styleUrls: ['./microevents-detail-sm.component.css']
})
export class MicroeventsDetailSmComponent implements OnInit {
  @Input() editable:boolean = false;
  @Input() event!: MicroEvento;
  areaIcons:string[] = [];
  statusClass:string = "";

  constructor() { }

  ngOnInit(): void {
    this.statusClass = Status.getStatusClass(this.event.status);
  }

}

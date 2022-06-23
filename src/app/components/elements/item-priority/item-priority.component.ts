import { Component, HostBinding, Input, OnInit } from '@angular/core';

export interface ItemPriority {
  label : string,
  icon : string,
  checked : boolean,
  priority : number | undefined,
  other?: any
}

@Component({
  selector: 'app-item-priority',
  templateUrl: './item-priority.component.html',
  styleUrls: ['./item-priority.component.css']
})
export class ItemPriorityComponent implements OnInit {
  @HostBinding('class.active') @Input() checked: boolean = false;
  @Input() priority?: number;
  @Input() label!: string;
  @Input() icon?: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}

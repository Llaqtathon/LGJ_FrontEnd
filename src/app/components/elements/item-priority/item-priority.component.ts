import { Component, HostBinding, Input, OnInit } from '@angular/core';

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

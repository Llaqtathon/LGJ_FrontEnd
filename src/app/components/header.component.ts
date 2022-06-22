import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <title>{{ title }}</title>
    </header>
  `,
  styles: [
    `
      header {
        position: absolute;
        height: 50px;
        left: 0;
        top: 0;
        right: 0;
        background: #eee;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: capitalize;
      }
    `
  ]
})
export class HeaderComponent implements OnInit {
  @Input() title: string = '';
  constructor() {}

  // title = '';

  ngOnInit(): void {}
}
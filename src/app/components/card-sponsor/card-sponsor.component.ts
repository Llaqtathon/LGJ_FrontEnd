import { Component, Input, OnInit } from '@angular/core';
import { Sponsors } from 'src/app/models/sponsor.model';

@Component({
  selector: 'app-card-sponsor',
  templateUrl: './card-sponsor.component.html',
  styleUrls: ['./card-sponsor.component.css']
})
export class CardSponsorComponent implements OnInit {
  @Input () sponsor: Sponsors={}

  constructor() { }

  ngOnInit(): void {
  }

}

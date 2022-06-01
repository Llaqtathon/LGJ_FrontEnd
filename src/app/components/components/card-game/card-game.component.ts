import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Game } from 'src/app/models/game.model';

@Component({
  selector: 'app-card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.css']
})
export class CardGameComponent implements OnInit {
  @Input () game: Game = {}
  url: string = '';

  constructor(private route: Router ) {
    
  }

  ngOnInit(): void {
    this.url = this.route.url; 
  }

}

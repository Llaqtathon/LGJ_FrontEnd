import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game.model';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {
  games: Game[] = []
  columns: number = window.window.innerWidth > 900 ? 3 :2;
  showFilters = false;

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.onBoxResize();
    this.getGames();
  }

  getGames(): void {
    this.gamesService.getAll().subscribe({
      next: (data: Game[]) => {
        this.games = data.filter(game => game.name);

        console.log(this.games);
      }
    })
  }
  
  onBoxResize(): void {
    this.columns = window.window.innerWidth > 900 ? 3 : 
      window.window.innerWidth > 750 ? 2 : 1;
  }
}

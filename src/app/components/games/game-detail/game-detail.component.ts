import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from 'src/app/models/game.model';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
  game: Game = {
    id: 1,
    name: 'Super Mario Bros',
    description: 'A classic game',
    fotoUrl: 'https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    urlGGJ: 'https://www.gamegazette.com/news/2018/02/super-mario-bros-nes-review-and-gameplay-video-game-gazette-2018-02-27/',
    urlIcht: 'https://www.itch.io/games/super-mario-bros',
    urlAdditional: 'https://www.youtube.com/watch?v=QH2-TGUlwu4',
  }

  constructor(private route: ActivatedRoute, private gameService: GamesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getGame(params['id']) //log the value of id
    });
  }

  getGame = (gameId: number | undefined): void => {
    if (!gameId) return;

    this.gameService.get(gameId).subscribe({
      next: (data: Game) => {
        this.game = data;
      },
      error: (err) => { console.log(err) }
    })
  }

}

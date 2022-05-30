import { Component, OnInit } from '@angular/core';
import { Edition } from 'src/app/models/edition.model';
import { Game } from 'src/app/models/game.model';
import { EditionsService } from 'src/app/services/editions.service';

@Component({
  selector: 'app-past-editions',
  templateUrl: './past-editions.component.html',
  styleUrls: ['./past-editions.component.css']
})
export class PastEditionsComponent implements OnInit {
  editions?: Edition[];
  games?: Game[] = [];
  tabTitles: string[] = [];
  
  constructor(private editionService: EditionsService) { }

  ngOnInit(): void {
      this.getEditions();
      

  }


  getEditions = (): void => {
    //change to be by edition
    this.editionService.getAll().subscribe({
      next: (data: Edition[]) => {
        this.editions = data;

        if (this.editions[0].id) {
          this.getGames(this.editions[0].id);
        }

        this.tabTitles = this.editions.map(edition => {
          if ( !(edition && edition.name) )  return '?';
          return edition && edition.name ? edition.name
            .split(' ')
            .map((word, i, arr) => arr.length - 1 === i ? word : word[0] )
            .join('') : '?';
        })
      },
      error: (err) => { console.log(err) }
    })
  }

  getGames = (id: number): void => {
    this.editionService.getGames(id).subscribe({
      next: (data: Game[]) => {
        this.games = data;
      },
      error: (err) => { console.log(err) }
    })
  }

  onSelectedTabChange = (tab: number): void => {    
    const edition =  this.editions && this.editions[tab] 
      ? this.editions[tab] : null;

    if (edition && edition.id) {
      this.getGames(edition.id);
    }
  }
}

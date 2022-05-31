import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private baseUrl: string = `${environment.baseUrl}/games`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Game[]> {
    return this.http.get<Game[]>(this.baseUrl);
  }

  get(id: number): Observable<Game> {
    return this.http.get<Game>(`${this.baseUrl}/${id}`);
  }
  
  filterGames(name: string, editionId: number[], platform: number[], ggjUrl: boolean, itch: boolean): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.baseUrl}/filter?name=${name}&editionId=${editionId}&platform=${platform}&ggjUrl=${ggjUrl}&itch=${itch}`);
  }
}

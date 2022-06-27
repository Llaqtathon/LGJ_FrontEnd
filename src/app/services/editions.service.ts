import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";
import { Edition } from '../models/edition.model';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class EditionsService {
  private baseUrl: string = `${environment.baseUrl}/editions`;
  
  constructor(private http: HttpClient) { }

  getAll(): Observable<Edition[]> {
    return this.http.get<Edition[]>(this.baseUrl);
  }

  getAllActive(): Observable<Edition[]> {
    return this.http.get<Edition[]>(`${this.baseUrl}/actives`);
  }

  getGames(id: number): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.baseUrl}/${id}/games`);
  }
}

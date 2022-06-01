import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { MicroEvento } from './../models/microevento.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MicroeventsService {
  private baseUrl: string = `${environment.baseUrl}/micro`;

  constructor(private http: HttpClient) { }

  getByEdition(editionId: number): Observable<MicroEvento[]> {
    return this.http.get<MicroEvento[]>(`${this.baseUrl}/edition/${editionId}`);
  }

  getByUserId(userId: number): Observable<MicroEvento[]> {
    return this.http.get<MicroEvento[]>(`${this.baseUrl}/user/${userId}`);
  }

  getById(id: number): Observable<MicroEvento> {
    return this.http.get<MicroEvento>(`${this.baseUrl}/${id}`);
  }

  getAsignadosById(id: number): Observable<MicroEvento[]> {
    return this.http.get<MicroEvento[]>(`${this.baseUrl}/asignados/${id}`);
  }
}

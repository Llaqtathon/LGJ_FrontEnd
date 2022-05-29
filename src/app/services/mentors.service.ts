import { Mentor } from './../models/mentor.model';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MentorsService {
  private baseUrl: string = `${environment.baseUrl}/mentors`;

  constructor (private http: HttpClient) {}

  getAll(): Observable<Mentor[]> {
      return this.http.get<Mentor[]>(this.baseUrl);
  }

  // getAllByEdition(editionId: string): Observable<Group[]> {
  //     return this.http.get<Group[]>(`${this.baseUrl}/edition/${editionId}`);
  // }

  // get(id: string): Observable<Mentor> {
  //     return this.http.get<Mentor>(`${this.baseUrl}/${id}`);
  // }

  // create(data: any): Observable<Group> {
  //     return this.http.post<Group>(this.baseUrl, data);
  // }

  // join(groupId: number, userId: string): Observable<Group> {
  //     return this.http.patch<Group>(`${this.baseUrl}/${groupId}/join/${userId}`, null);
  // }

  // leave(groupId: number, userId: string): Observable<Group> {
  //     return this.http.patch<Group>(`${this.baseUrl}/${groupId}/leave/${userId}`, null);
  // }
}

import { MentorAvailab } from './../models/mentor-availab.model';
import { MentorEd } from '../models/mentor-edition.model';
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

  getByEdition(editionId: number): Observable<MentorEd[]> {
    return this.http.get<MentorEd[]>(`${this.baseUrl}/edition/${editionId}`);
  }

  getOne(mentorID: number): Observable<MentorEd[]> {
      return this.http.get<MentorEd[]>(`${this.baseUrl}/${mentorID}`);
  }
  getOneByEdition(editionId: number, mentorID: number): Observable<MentorEd[]> {
      return this.http.get<MentorEd[]>(`${this.baseUrl}/${editionId}/${mentorID}`);
  }
  getAvailab(editionId: number, mentorID: number): Observable<MentorAvailab[]> {
      return this.http.get<MentorAvailab[]>(`${this.baseUrl}/availability/${editionId}/${mentorID}`);
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

import { MentorAvailab, MentorEd } from '../models/mentor-edition.model';
import { HttpClient, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { MentorUser } from '../models/mentor-user.model';
import { MentorArea } from '../models/mentor-area.model';

@Injectable({
  providedIn: 'root'
})
export class MentorsService {
  private baseUrl: string = `${environment.baseUrl}/mentors`;

  constructor (private http: HttpClient) {}


  getAll(): Observable<MentorEd[]> {
    return this.http.get<MentorEd[]>(`${this.baseUrl}`);
  }
  getOne(mentorID: number): Observable<MentorEd[]> {
    return this.http.get<MentorEd[]>(`${this.baseUrl}/${mentorID}`);
  }
  create(data: MentorUser): Observable<MentorUser> {
    return this.http.post<MentorUser>(this.baseUrl, data);
  }
  userToMentor(userId: number, data: any): Observable<MentorUser> {
    return this.http.post<MentorUser>(`${this.baseUrl}/user/${userId}`, data);
  }
  update(mentorID: number, data: any): Observable<MentorUser> {
    return this.http.patch<MentorUser>(`${this.baseUrl}/${mentorID}`, data);
  }


  setAreas(mentorID: number , areas: MentorArea[]): Observable<MentorArea> {
    return this.http.post<MentorArea>(`${this.baseUrl}/areas/${mentorID}`, areas);
  }
  updateAreas(mentorID: number , areas: MentorArea[]): Observable<MentorArea> {
    return this.http.put<MentorArea>(`${this.baseUrl}/areas/${mentorID}`, areas);
  }
  deleteAreas(mentorID: number , areas: number[]): Observable<MentorArea> {
    return this.http.delete<MentorArea>(`${this.baseUrl}/areas/${mentorID}`, {body: areas});
  }


  getByEdition(editionId: number): Observable<MentorEd[]> {
    return this.http.get<MentorEd[]>(`${this.baseUrl}/edition/${editionId}`);
  }
  getOneByEdition(editionId: number, mentorID: number): Observable<MentorEd[]> {
    return this.http.get<MentorEd[]>(`${this.baseUrl}/edition/${editionId}/${mentorID}`);
  }
  createInEdition(editionId: number, data: any): Observable<MentorEd> {
    return this.http.post<MentorEd>(`${this.baseUrl}/edition/${editionId}`, data);
  }
  updateInEdition(editionId: number, data: any): Observable<MentorEd> {
    return this.http.patch<MentorEd>(`${this.baseUrl}/edition/${editionId}`, data);
  }
  deleteInEdition(editionId: number, mentorID: number): Observable<MentorEd> {
    return this.http.delete<MentorEd>(`${this.baseUrl}/edition/${editionId}/${mentorID}`);
  }
  
  getAvailab(editionId: number, mentorID: number): Observable<MentorAvailab[]> {
    return this.http.get<MentorAvailab[]>(`${this.baseUrl}/availability/${editionId}/${mentorID}`);
  }
  createAvailab(data: any): Observable<MentorAvailab> {
    return this.http.post<MentorAvailab>(`${this.baseUrl}/availability`, data);
  }
  updateAvailab(data: any): Observable<MentorAvailab> { //av id dentro de data
    return this.http.put<MentorAvailab>(`${this.baseUrl}/availability`, data);
  }
  deleteAvailab(availabId: number): Observable<MentorAvailab> {
    return this.http.delete<MentorAvailab>(`${this.baseUrl}/availability/${availabId}`);
  }
  
  
  
}

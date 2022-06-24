import { Mentor } from './../models/mentor-user.model';
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
  create(data: Mentor): Observable<Mentor> {
    return this.http.post<Mentor>(this.baseUrl, data);
  }
  userToMentor(userId: number, data: any): Observable<MentorUser> {
    return this.http.post<MentorUser>(`${this.baseUrl}/user/${userId}`, data);
  }
  update(mentorID: number, data: any): Observable<MentorUser> {
    return this.http.patch<MentorUser>(`${this.baseUrl}/${mentorID}`, data);
  }


  getAreas() :Observable<{id:number, name:string}[]> {
    return this.http.get<{id:number, name:string}[]>(`${environment.baseUrl}/areas`);
  }
  setAreas(mentorID: number , areas: MentorArea[]): Observable<MentorArea> {
    return this.http.post<MentorArea>(`${this.baseUrl}/areas/${mentorID}`, {areas:areas});
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
  createInEdition(editionId: number, data: {mentorId:number, status:string}): Observable<MentorEd> {
    return this.http.post<MentorEd>(`${this.baseUrl}/edition/${editionId}`, data);
  }
  updateInEdition(editionId: number, data: {mentorId:number, status:string}): Observable<MentorEd> {
    return this.http.patch<MentorEd>(`${this.baseUrl}/edition/${editionId}`, data);
  }
  deleteInEdition(editionId: number, mentorID: number): Observable<MentorEd> {
    return this.http.delete<MentorEd>(`${this.baseUrl}/edition/${editionId}/${mentorID}`);
  }
  
  getAvailab(editionId: number, mentorID: number): Observable<MentorAvailab[]> {
    return this.http.get<MentorAvailab[]>(`${this.baseUrl}/availability/${editionId}/${mentorID}`);
  }
  createAvailab(data: MentorEd): Observable<MentorEd> {
    return this.http.post<MentorEd>(`${this.baseUrl}/availability`, data);
  }
  updateAvailab(data: MentorEd): Observable<MentorEd> { //av id dentro de data
    return this.http.put<MentorEd>(`${this.baseUrl}/availability`, data);
  }
  // deleteAvailab(availabId: number): Observable<MentorAvailab> {
  //   return this.http.delete<MentorAvailab>(`${this.baseUrl}/availability/${availabId}`);
  // }
  deleteAvailabs(availabIds: number[]): Observable<MentorAvailab> {
    return this.http.delete<MentorAvailab>(`${this.baseUrl}/availability`,{body: availabIds});
  }
  
  
}

import { Sponsors } from './../models/sponsor.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class SponsorService{
    private baseUrl: string= `${environment.baseUrl}/sponsor`;

    constructor(private http: HttpClient){} 
    getAll(): Observable<Sponsors[]> {
        return this.http.get<Sponsors[]>(this.baseUrl);
      }
    get(id: number): Observable<Sponsors>{
        return this.http.get(`${this.baseUrl}/${id}`);
    }
    create(data: any): Observable<Sponsors>{
        return this.http.post(this.baseUrl, data);
    }
    update(id: number, data:any): Observable<Sponsors>{
        return this.http.put(`${this.baseUrl}/${id}`, data);
    }
    delete(id: number): Observable<Sponsors>{
        return this.http.delete(`${this.baseUrl}/${id}`);
    }
}

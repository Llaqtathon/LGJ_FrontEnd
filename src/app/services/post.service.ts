import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";
import {Post} from './../models/post.model';
@Injectable({
    providedIn: 'root'
})
export class PostService {
    private baseUrl: string= `${environment.baseUrl}/posts`;

    constructor(private http: HttpClient){} 
    getAll(): Observable<Post[]> {
        return this.http.get<Post[]>(this.baseUrl);
      }
    get(id: number): Observable<Post>{
        return this.http.get(`${this.baseUrl}/${id}`);
    }
    create(data: any): Observable<Post>{
        return this.http.post(this.baseUrl, data);
    }
    update(id: number, data:any): Observable<Post>{
        return this.http.put(`${this.baseUrl}/${id}`, data);
    }
    delete(id: number): Observable<Post>{
        return this.http.delete(`${this.baseUrl}/${id}`);
    }
}
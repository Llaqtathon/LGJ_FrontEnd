import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";
import { Proyecto } from './../models/proyecto.model';
@Injectable({
    providedIn: 'root'
})
export class ProyectoService {
    private baseUrl: string= `${environment.baseUrl}/proyectos`;

    constructor(private http: HttpClient){} 
    getAll(): Observable<Proyecto[]> {
        return this.http.get<Proyecto[]>(this.baseUrl);
      }
    get(id: number): Observable<Proyecto>{
        return this.http.get(`${this.baseUrl}/${id}`);
    }
    create(data: any): Observable<Proyecto>{
        return this.http.post(this.baseUrl, data);
    }
    update(id: number, data:any): Observable<Proyecto>{
        return this.http.put(`${this.baseUrl}/${id}`, data);
    }
    delete(id: number): Observable<Proyecto>{
        return this.http.delete(`${this.baseUrl}/${id}`);
    }
}
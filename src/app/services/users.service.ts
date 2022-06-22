import { User } from './../models/user.model';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
@Injectable({
    providedIn: "root"
})
export class UserService {
    private baseUrl: string = `${environment.baseUrl}/users`;

    constructor (private http: HttpClient) {}

    create(data: any): Observable<User> {
        return this.http.post<User>(this.baseUrl, data);
    }
    getAll(params:any):Observable<any>{
        return this.http.get<any[]>(this.baseUrl,{params});
    }
    get(id: number): Observable<User> {
        return this.http.get(`${this.baseUrl}/${id}`);
    }
    findParticipantByRol(rol:any):Observable<User[]>{
        return this.http.get<User[]>(`${this.baseUrl}/${rol}`);
    }
    findParticipantByName(id:any, nombres:any):Observable<User[]>{
        return this.http.get<User[]>(`${this.baseUrl}${id}/${nombres}`);
    }
    update(id:number, data:any):Observable<any>{
        return this.http.put(`${this.baseUrl}/${id}`, data);
    }
    loginUser(data: any){
        return this.http.post<User>(this.baseUrl,data);
    }
}
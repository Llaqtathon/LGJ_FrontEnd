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
    getAll():Observable<User[]>{
        return this.http.get<User[]>(this.baseUrl);
    }
    get(id: number): Observable<User> {
        return this.http.get(`${this.baseUrl}/${id}`);
    }
    findParticipant(id:number, rol:string):Observable<User[]>{
        return this.http.get<User[]>(`${this.baseUrl}/${id}/${rol}`);
    }
    update(id:number, data:any):Observable<any>{
        return this.http.put(`${this.baseUrl}/${id}`, data);
    }
}
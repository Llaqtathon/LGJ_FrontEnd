import { User } from './../models/user.model';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
@Injectable({
    providedIn: "root"
})
export class ParticipantsService {
    private baseUrl: string = `${environment.baseUrl}/participants`;

    constructor (private http: HttpClient) {}

    getAll(params:any):Observable<any>{
        return this.http.get<any[]>(this.baseUrl,{params});
    }
    findParticipantByrol(rol:any):Observable<User[]>{
        return this.http.get<User[]>(`${this.baseUrl}/${rol}`);
    }
    updateUser(id:number, value:User){
        return this.http.patch(`${this.baseUrl}/${id}`, value)
        .subscribe()
    }
/*     loginUser(data: any){
        return this.http.post<User>(this.baseUrl,data);
    } */
}
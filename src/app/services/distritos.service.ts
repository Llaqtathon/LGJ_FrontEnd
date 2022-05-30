import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Distrito } from "../models/distrito.model";
@Injectable({
    providedIn: "root"
})
export class DistritoService {
    private baseUrl: string = `${environment.baseUrl}/distritos`;

    constructor (private http: HttpClient) {}

    getAll(): Observable<Distrito[]> {
        return this.http.get<Distrito[]>(this.baseUrl);
    }
}
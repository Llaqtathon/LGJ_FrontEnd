import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Group } from "../models/group.model";

@Injectable({
    providedIn: "root"
})
export class GroupService {
    private baseUrl: string = `${environment.baseUrl}/groups`;

    constructor (private http: HttpClient) {}

    getAll(): Observable<Group[]> {
        return this.http.get<Group[]>(this.baseUrl);
    }

    getAllByEdition(editionId: string): Observable<Group[]> {
        return this.http.get<Group[]>(`${this.baseUrl}/edition/${editionId}`);
    }

    get(id: string): Observable<Group> {
        return this.http.get<Group>(`${this.baseUrl}/${id}`);
    }

    create(data: any): Observable<Group> {
        return this.http.post<Group>(this.baseUrl, data);
    }

    join(groupId: number, userId: string): Observable<Group> {
        return this.http.patch<Group>(`${this.baseUrl}/${groupId}/join/${userId}`, null);
    }

    leave(groupId: number, userId: string): Observable<Group> {
        return this.http.patch<Group>(`${this.baseUrl}/${groupId}/leave/${userId}`, null);
    }
}
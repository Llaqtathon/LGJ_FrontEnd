import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Login } from '../models/login-user.model';

@Injectable({
  providedIn: 'root',
})
export class IdentityService {
  constructor(private http: HttpClient) {}

  login(model: Login): Observable<Login> {
    return this.http.post(`${environment.baseUrl}/login`, model);
  }

  create(data: any): Observable<User> {
    return this.http.post<User>(`${environment.baseUrl}/signup`, data);
}
}

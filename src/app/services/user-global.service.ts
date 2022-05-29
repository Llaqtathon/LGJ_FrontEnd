import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserGlobalService {
  public isLogged = true;
  public isOrg = true;
  public areEvntActs = true;

  constructor() { }
}

import { Edition } from 'src/app/models/edition.model';
import { Observable, Observer } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserGlobalService {
  public globalVarUpdate?:Observable<string>;
  public globalVarObserver?:Observer<any>;
  public isLogged = sessionStorage.getItem('user') ? true : false;
  public isOrg = true;
  public areEvntActs = true;
  public currentPag = '/home';
  public currentTab = '/';
  public activeEdicions?:Edition[];
  public user?: User;

  constructor() {
    this.globalVarUpdate = Observable.create((observer:Observer<any>) => {
      this.globalVarObserver = observer;
    });
  }
  updateCurrPag(newValue:string) {
    this.currentPag = newValue;
    this.globalVarObserver?.next(this.currentPag);
  }
  updateCurrTab(newValue:string) {
    this.currentTab = newValue;
    this.globalVarObserver?.next(this.currentTab);
  }
  updateActiveEdicions(newValue:Edition[]) {
    this.activeEdicions = newValue;
    this.globalVarObserver?.next(this.activeEdicions);
  }
  login(user: {username:string, password:string}) {
    this.user = {
      username: user.username,
      password: user.password,
    };
    this.isLogged = true;
    this.globalVarObserver?.next(this.isLogged);
    sessionStorage.setItem('user', JSON.stringify({user: this.user.username}));
  }

  logout() {
    this.user = undefined;
    this.isLogged = false;
    this.globalVarObserver?.next(this.isLogged);
    sessionStorage.removeItem('user');
  }
  
}

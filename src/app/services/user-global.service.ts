import { Edition } from 'src/app/models/edition.model';
import { Observable, Observer } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserGlobalService {
  public globalVarUpdate?:Observable<string>;
  public globalVarObserver?:Observer<any>;
  public isLogged = sessionStorage.getItem('isLogged') ? true : false;;
  public isOrg = true;
  public areEvntActs = true;
  public currentPag = '/home';
  public currentTab = '/';
  public activeEdicions?:Edition[];

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

  login(){
    this.isLogged = true;
    sessionStorage.setItem('isLogged', 'true');
  }
  logout(){
    this.isLogged = false;
    sessionStorage.removeItem('isLogged');
  }
}

import { Observable, Observer } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserGlobalService {
  public globalVarUpdate?:Observable<string>;
  public globalVarObserver?:Observer<any>;
  public isLogged = true;
  public isOrg = true;
  public areEvntActs = true;
  public currentPag = '/home';
  public currentTab = '/';

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
}

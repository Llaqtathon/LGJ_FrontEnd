import { Sponsors } from 'src/app/models/sponsor.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SponsorFormsService {
  _state: Sponsors = {};
  _modified: boolean = false;

  constructor() { }

  get state() {
    return this._state;
  }
  
  set state(data) {
    this._state = data
  }

  get modified() {
    return this._modified;
  }

  set modified(data) {
    this._modified = data
  }
}

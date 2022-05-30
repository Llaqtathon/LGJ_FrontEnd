import { Injectable } from '@angular/core';
import { Group } from '../models/group.model';

@Injectable({
  providedIn: 'root'
})
export class GroupFormsService {
  _state: Group = {};
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

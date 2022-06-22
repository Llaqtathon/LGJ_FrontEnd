import { Post } from 'src/app/models/post.model';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
  })
  export class PostFormsService {
    _state: Post = {};
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
  
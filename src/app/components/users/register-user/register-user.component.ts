import { Distrito } from './../../../models/distrito.model';
import { DistritoService } from './../../../services/distritos.service';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  distritos?: Distrito[] =[];
  distritoModel = new Distrito();
  userModel = new User();
  
  constructor(
    private DistritoService: DistritoService) {
      this.DistritoService.getAll().subscribe((resp:any)=>{
        this.distritos=resp;
      })
   }

  ngOnInit():void {
    
  }
onSubmit() {
  console.log(this.userModel);
}
}

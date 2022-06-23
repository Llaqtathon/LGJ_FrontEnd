import { UserService } from './../../services/users.service';
import { Component, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-groups',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantUserComponent implements OnInit {
    users?: User[] =[];
    userModel = new User();
    participant = '';
    constructor(
      private userParticipantService: UserService,
      private fb: FormBuilder) {
        this.userParticipantService.getAll().subscribe((resp:any)=>{
          this.users=resp;
        })
     }
     submitted = false;
     registroForm = this.fb.group({
      username: [''],
      password: [''],
      nombres: [''],
      apellidos: [''],
      email: [''],
      nacimiento: [''],
      telefono: [''],
      distrito: this.fb.group({
        "id": ['']
      }),
      dni: [''],
      genero: [''],
      rol: ['PARTICIPANTE'],
      foto_perfil_url: [''],
      descripcion: ['']
    })
    ngOnInit():void {
      
    }
  }
  

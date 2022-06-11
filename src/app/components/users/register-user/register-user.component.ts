import { UserService } from './../../../services/users.service';
import { Distrito } from './../../../models/distrito.model';
import { DistritoService } from './../../../services/distritos.service';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { FormBuilder } from '@angular/forms';

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
    private DistritoService: DistritoService,
    private registroService: UserService,
    private fb: FormBuilder) {
      this.DistritoService.getAll().subscribe((resp:any)=>{
        this.distritos=resp;
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
  onSubmit(){
    this.registroService.create(this.registroForm.value).subscribe(
      data=>console.log('Success!',data),
      error=>console.error('Error!',error)
    )
    console.log(this.registroForm.value)
  }
}

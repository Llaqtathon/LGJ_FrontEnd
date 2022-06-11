
import { Distrito } from './../../../models/distrito.model';
import { DistritoService } from './../../../services/distritos.service';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { FormBuilder } from '@angular/forms';
import { IdentityService } from 'src/app/services/identity.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  distritos?: Distrito[] =[];
  public invalid?: boolean;
  distritoModel = new Distrito();
  userModel = new User();

  constructor(
    private DistritoService: DistritoService,
    private registroService: IdentityService,
    private fb: FormBuilder,
    private router: Router) {
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
  onSubmit(): void{
    let self = this;
    this.registroService.create(this.registroForm.value).subscribe({
      next(data) {
        console.log('Success!',data),
        self.router.navigate(['/login']);
      },
      error() {
        self.invalid = true;
      },
  })}
}


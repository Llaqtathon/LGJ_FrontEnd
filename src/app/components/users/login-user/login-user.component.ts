import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserGlobalService } from 'src/app/services/user-global.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  loginForm = this.fb.group({
    username: [''],
    password: [''],
  });

  constructor(
    private fb: FormBuilder,
    private ugs: UserGlobalService,
    private router: Router
  ) {

    
   }

  ngOnInit(): void { }

  onSubmit() {
    this.ugs.login(this.loginForm.value);
    this.router.navigate(['/']);
  }
}

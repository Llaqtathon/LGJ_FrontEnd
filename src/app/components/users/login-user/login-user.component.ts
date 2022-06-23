import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login-user.model';
import { IdentityService } from 'src/app/services/identity.service';
import { UserGlobalService } from 'src/app/services/user-global.service';
import { UserStorageService } from 'src/app/services/user-storage.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  public model: Login = new Login();
  public invalid?: boolean;

  constructor(
    private identityService: IdentityService,
    private userStorageService: UserStorageService,
    private userGlobalService: UserGlobalService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    let self = this;

    this.identityService.login(this.model).subscribe({
      next(data) {
        //console.log(data);
        self.userStorageService.set(data);
        self.userGlobalService.login();
        self.router.navigate(['/']);
      },
      error() {
        self.invalid = true;
      },
    });
  }
}

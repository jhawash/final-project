import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
import { AppUserService } from '../app-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 user = {
  "email": "",
  "password":""
  }

  constructor(public movieService: MovieService, private router: Router, public _appUser: AppUserService) { 
  }
  
 onLogIn() {
    this._appUser.logInUser(this.user)
       .subscribe( (res:any) =>{ 
         this.router.navigate([`/home`]);
         console.log(res)
          sessionStorage.setItem('token', res.token  );
          sessionStorage.setItem('userId', res.userId  );
       })
  }
}

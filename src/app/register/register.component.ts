import { Component } from '@angular/core';
import { AppUserService } from '../app-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  
  user = {
  "firstName": "",
  "lastName": "",
  "email": "",
  "password":""
  }
  
  constructor(public _appUser: AppUserService, private router: Router) { }

  onRegister() {
    this._appUser.registerUser(this.user)
       .subscribe( (res:any) =>{
         this.router.navigate([`/login`]);
         console.log(res)
          sessionStorage.setItem('token', res.token  );
          sessionStorage.setItem('userId', res.userId  );
          
       })
  }

}

import { Component } from '@angular/core';
import { AppUserService } from '../app-user.service';

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
  
  constructor(public _appUser: AppUserService) { }

  onRegister() {
    this._appUser.registerUser(this.user)
       .subscribe( (res:any) =>{ 
         console.log(res)
          sessionStorage.setItem('token', res.token  );
          sessionStorage.setItem('userId', res.userId  );
       })
  }
 onLogIn() {
    this._appUser.logInUser(this.user)
       .subscribe( (res:any) =>{ 
         console.log(res)
          sessionStorage.setItem('token', res.token  );
          sessionStorage.setItem('userId', res.userId  );
       })
  }
}

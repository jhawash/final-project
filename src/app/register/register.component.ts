import { Component, OnInit } from '@angular/core';
import { AppUserService } from '../app-user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  user = {
  "firstName": "",
  "lastName": "",
  "email": "",
  "password":""
  }
  
  constructor(public _appUser: AppUserService) { 
    
  }

  onRegister() {
    this._appUser.registerUser(this.user)
       .subscribe( (pedro)=>{ 
          console.log(pedro, "hit")
       })
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppUserService {
  private base_url = 'http://meanstack-2018-5-john-phortonssf.c9users.io:8080/api/AppUsers';

  constructor(public _http: HttpClient) {}
  
  getUser() {
    // tslint:disable-next-line:max-line-length
    return this._http.get(this.base_url);
  }
  // 
  registerUser(user) {
    return this._http.post(this.base_url, user);
  }  
    
  logInUser(user) {
    return this._http.post(this.base_url + "/login", user);
  }    
    
  // getUserData() {
  //   this._base.getUser()
  //   .subscribe (
  //     (response) => {
  //       console.log (this.movieInfo);
  //     })
    // }
    
}


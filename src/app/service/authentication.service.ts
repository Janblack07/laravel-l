import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private api='http://127.0.0.1:8000/api/';
  constructor(private http: HttpClient) {
  }
  registerUser(body:any){

    return this.http.post(this.api+'register',body);

  }
  loginUser(body:any){
    return this.http.post(this.api+'login',body);
  }
  userProfile(){
    return this.http.get(this.api+'userProfile');
  }
  logout(){
    return this.http.post(this.api+'logout',{});
  }
  
}

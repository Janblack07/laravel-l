import { Component , OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormArray } from '@angular/forms';
import { AuthenticationService } from '../service/authentication.service';
import { Response } from '../logincontrol/response.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

loginForm= new FormGroup({
  correoU : new FormControl('', [Validators.required,Validators.email]),
  passwordU : new FormControl('', [Validators.required,Validators.minLength(6)]),

})

constructor(private aut:AuthenticationService, private router:Router){
}
OnInit(){

}
get validarusuario(){
  return this.loginForm.get('correoU')?.invalid
  && this.loginForm.get('correoU')?.touched;

}

get validarpassword(){
  return this.loginForm.get('passwordU')?.invalid
  && this.loginForm.get('passwordU')?.touched ;
}

onLogin(Form:any){

if(this.loginForm.invalid){
  return Object.values(this.loginForm.controls).forEach(control=>{
    control.markAllAsTouched();

  });

}else{
  console.log(Form);
  this.aut.loginUser(Form).subscribe((data:any)=>{
    console.log(data);

      localStorage.setItem('token',data.access_token);
      this.router.navigate(['principal']);
      alert('Se Logeo con exito.');
  },(e)=>{console.log(e);});


}

}

}

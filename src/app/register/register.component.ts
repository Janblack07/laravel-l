import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm= new FormGroup({
    nombreU: new FormControl('', [Validators.required,Validators.pattern("[a-zA-Z ]+")]),
    apellidoU: new FormControl('', [Validators.required,Validators.pattern("[a-zA-Z ]+")]),
    cedulaU: new FormControl('', [Validators.required,Validators.pattern("[0-9]{10}")]),
    correoU : new FormControl('', [Validators.required,Validators.email]),
    passwordU : new FormControl('', [Validators.required,Validators.minLength(6)]),

  })

  constructor(private aut:AuthenticationService){
  }
  get validarnombre(){
    return this.registerForm.get('nombreU')?.invalid
    && this.registerForm.get('nombreU')?.touched;

  }
  get validarapellido(){
    return this.registerForm.get('apellidoU')?.invalid
    && this.registerForm.get('apellidoU')?.touched;

  }
  get validarcedula(){
    return this.registerForm.get('cedulaU')?.invalid
    && this.registerForm.get('cedulaU')?.touched;

  }
  get validarusuario(){
    return this.registerForm.get('correoU')?.invalid
    && this.registerForm.get('correoU')?.touched;

  }

  get validarpassword(){
    return this.registerForm.get('passwordU')?.invalid
    && this.registerForm.get('passwordU')?.touched ;
  }


  OnRegister(Form:any){
    if(this.registerForm.invalid){
      return Object.values(this.registerForm.controls).forEach(control=>{
        control.markAllAsTouched();

      });
    }else{
      console.log(Form);
      this.aut.registerUser(Form).subscribe((data:any)=>{
        console.log(data);
        alert('Se creo el usuario.');
      },(e)=>{console.log(e);});
    }

    }
  }



import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

import { HallService } from '../service/hall.service';

@Component({
  selector: 'app-ingresarsala',
  templateUrl: './ingresarsala.component.html',
  styleUrls: ['./ingresarsala.component.css']
})
export class IngresarsalaComponent {
  salaForm= new FormGroup({
    nombreS: new FormControl('', [Validators.required]),
    numeroAsientos: new FormControl('', [Validators.required]),
  })
  constructor(private aut:HallService, private route:Router){
  }
  get validarnombreS(){
    return this.salaForm.get('nombreS')?.invalid
    && this.salaForm.get('nombreS')?.touched;

  }
  get validarnumeroAsientos(){
    return this.salaForm.get('numeroAsientos')?.invalid
    && this.salaForm.get('numeroAsientos')?.touched;

  }

  OnRegistroSala(Form:any){
    if(this.salaForm.invalid){
      return Object.values(this.salaForm.controls).forEach(control=>{
        control.markAllAsTouched();

      });
    }else{
      console.log(Form);
      this.aut.createhall(Form).subscribe((data:any)=>{
        console.log(data);
        alert('Se creo la sala.');
        this.route.navigate(['/principal/sala/ver']);
      },(e)=>{console.log(e);});
    }

    }
}

import { Component , OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HallService } from '../service/hall.service';

@Component({
  selector: 'app-editarsala',
  templateUrl: './editarsala.component.html',
  styleUrls: ['./editarsala.component.css']
})
export class EditarsalaComponent {
  data:any;
    salaForm= new FormGroup({
      nombreS: new FormControl('', [Validators.required]),
      numeroAsientos: new FormControl('', [Validators.required]),
    })
    constructor(private aut:HallService, private router:Router ){
    }

    ngOnInit(){

    }
    get validarnombreS(){
      return this.salaForm.get('nombreS')?.invalid
      && this.salaForm.get('nombreS')?.touched;

    }
    get validarnumeroAsientos(){
      return this.salaForm.get('numeroAsientos')?.invalid
      && this.salaForm.get('numeroAsientos')?.touched;

    }

}

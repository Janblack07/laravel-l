import { Component , OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HallService } from '../service/hall.service';

@Component({
  selector: 'app-editarsala',
  templateUrl: './editarsala.component.html',
  styleUrls: ['./editarsala.component.css']
})
export class EditarsalaComponent {
  data:any;
  id:any;
  editMode: boolean = false;
      salaForm= new FormGroup({
      nombreS: new FormControl('', [Validators.required]),
      numeroAsientos: new FormControl('', [Validators.required]),
    })
    constructor(private aut:HallService, private router:Router , private route:ActivatedRoute){
    }

    ngOnInit(){

       this.id = this.route.snapshot.params['id'];

        this.aut.oneHall(this.id).subscribe((data:any)=>{
        this.data=data.Salas;
        this.salaForm.setValue({
          "nombreS": this.data.nombreS,
          "numeroAsientos":this.data.numeroAsientos
        })
      },(e)=>{console.log(e);});

    }

    onUpdate(data:any){
      console.log(data);
       this.aut.updateHall(this.id,data).subscribe((data =>{
        alert('Se actualizo conrrectamente.');
        this.router.navigate(['/principal/sala/ver']);
      }))
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

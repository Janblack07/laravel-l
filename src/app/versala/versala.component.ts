import { Component } from '@angular/core';
import { HallService } from '../service/hall.service';

@Component({
  selector: 'app-versala',
  templateUrl: './versala.component.html',
  styleUrls: ['./versala.component.css']
})
export class VersalaComponent {
  sala!:any;
  constructor(private hall:HallService){}
  ngOnInit(): void {
    this.OnHall()
  }
  OnHall(){
    this.hall.allHall().subscribe((data:any)=>{
      console.log(data);
      this.sala = Object.values(data.Salas);

    },(e)=>{
      console.log(e);
    })
  }
  Onupdate(id:any){
      this.hall.updateHall(id,this.sala).subscribe((data:any)=>{
        alert('Se modifico Correctamente.');
        this.OnHall();
      },(e)=>{console.log(e);})
  }
  onDelete(id:any){
    this.hall.destroyHall(id).subscribe((data:any)=>{
        alert('Se Elimino Correctamente.');
        this.OnHall();
    },(e)=>{console.log(e);})
  }

}

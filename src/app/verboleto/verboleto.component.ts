import { Component, OnInit } from '@angular/core';
import { HallMovieService } from '../service/hall-movie.service';

@Component({
  selector: 'app-verboleto',
  templateUrl: './verboleto.component.html',
  styleUrls: ['./verboleto.component.css']
})
export class VerboletoComponent {
boleto: any;

constructor(private boletos:HallMovieService){}

ngOnInit(){
  this.OnHall();
}
OnHall(){
  this.boletos.allhallMovie().subscribe((data:any)=>{
    console.log(data);
     this.boleto = Object.values(data.SalaPelicula);

  },(e)=>{
    console.log(e);
  })
}
}

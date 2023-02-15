import { Component } from '@angular/core';
import { HallMovieService } from '../service/hall-movie.service';

@Component({
  selector: 'app-versalapelicula',
  templateUrl: './versalapelicula.component.html',
  styleUrls: ['./versalapelicula.component.css']
})
export class VersalapeliculaComponent {
  salaPelicula!:any;
  constructor(private hall:HallMovieService){}
  ngOnInit(): void {
    this.OnHall()
  }
  OnHall(){
    this.hall.allhallMovie().subscribe((data:any)=>{
      console.log(data);
       this.salaPelicula = Object.values(data.SalaPelicula);

    },(e)=>{
      console.log(e);
    })
  }

}

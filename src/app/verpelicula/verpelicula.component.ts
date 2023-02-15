import { Component } from '@angular/core';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-verpelicula',
  templateUrl: './verpelicula.component.html',
  styleUrls: ['./verpelicula.component.css']
})
export class VerpeliculaComponent {
  constructor(private movie:MoviesService){}
  pelicula!:any;
  ngOnInit(): void {
    this.OnMovie()
  }

  OnMovie(){
    this.movie.allMovie().subscribe((data:any)=>{
      console.log(data);
      this.pelicula = Object.values(data.Peliculas);

    },(e)=>{
      console.log(e);
    })
  }
  onDelete(id:any){
    
    this.movie.destroyMovie(id).subscribe((data:any)=>{
        alert('Se Elimino Correctamente.');
        this.OnMovie();
    },(e)=>{console.log(e);})
  }
}

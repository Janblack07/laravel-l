import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HallMovieService } from '../service/hall-movie.service';
import { HallService } from '../service/hall.service';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-ingresarsalapelicula',
  templateUrl: './ingresarsalapelicula.component.html',
  styleUrls: ['./ingresarsalapelicula.component.css']
})
export class IngresarsalapeliculaComponent {
  sala!:any;
  pelicula!:any;
  salaPeliculaForm= new FormGroup({
    fecha: new FormControl('', [Validators.required]),
    horaI: new FormControl('', [Validators.required]),
    horaF: new FormControl('', [Validators.required]),
    pelicula_id: new FormControl('', [Validators.required]),
    sala_id: new FormControl('', [Validators.required]),
  })
  constructor(private aut:HallMovieService, private h:HallService, private m:MoviesService){
  }
  ngOnInit(){
    this.cargar();
  }
  cargar(){
    this.h.allHall().subscribe((data:any)=>{
      console.log(data);
      this.sala=data.Salas;
      console.log(this.sala);
    },(e)=>{console.log(e);});
    this.m.allMovie().subscribe((s:any)=>{
      console.log(s);
      this.pelicula=s.Peliculas;
      console.log(this.pelicula);
    },(e)=>{console.log(e);});
  }
  OnRegistroSalaPelicula(Form:any){
      console.log(Form);
       this.aut.createhallMovie(Form).subscribe((data:any)=>{
        console.log(data);
        alert('Se creo la SalaPelicula.');
      },(e)=>{console.log(e);});


    }
}

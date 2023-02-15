import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-ingresarpelicula',
  templateUrl: './ingresarpelicula.component.html',
  styleUrls: ['./ingresarpelicula.component.css']
})
export class IngresarpeliculaComponent {
  file!:any;
  peliculasForm= new FormGroup({
    nombreP: new FormControl('', [Validators.required]),
    imagenP: new FormControl('', [Validators.required]),
    precioP: new FormControl('', [Validators.required]),
    duracionP : new FormControl('', [Validators.required]),
    estrenoP : new FormControl('', [Validators.required]),
    nombreGP : new FormControl('', [Validators.required]),

  })

  constructor(private aut:MoviesService){
  }
  get validarnombreP(){
    return this.peliculasForm.get('nombreP')?.invalid
    && this.peliculasForm.get('nombreP')?.touched;

  }
  get validarimagenP(){
    return this.peliculasForm.get('imagenP')?.invalid
    && this.peliculasForm.get('imagenP')?.touched;

  }
  get validarprecioP(){
    return this.peliculasForm.get('precioP')?.invalid
    && this.peliculasForm.get('precioP')?.touched;

  }
  get validarduracioP(){
    return this.peliculasForm.get('duracioP')?.invalid
    && this.peliculasForm.get('duracioP')?.touched;

  }

  get validarestrenoP(){
    return this.peliculasForm.get('estrenoP')?.invalid
    && this.peliculasForm.get('estrenoP')?.touched ;
  }
  get validarnombreGP(){
    return this.peliculasForm.get('nombreGP')?.invalid
    && this.peliculasForm.get('nombreGP')?.touched ;
  }
  onFileSelected(event:any) {
     this.file = event.target.files[0];

  }

  OncrearMovie(Form:any){
    if(this.peliculasForm.invalid){
      return Object.values(this.peliculasForm.controls).forEach(control=>{
        control.markAllAsTouched();


      });
    }else{
      console.log(Form);
      const body:any=new FormData();
      body.append('nombreP',this.peliculasForm.get('nombreP')?.value);
      body.append('imagenP',this.file);
      body.append('precioP',this.peliculasForm.get('precioP')?.value);
      body.append('duracionP',this.peliculasForm.get('duracionP')?.value);
      body.append('estrenoP',this.peliculasForm.get('estrenoP')?.value);
      body.append('nombreGP',this.peliculasForm.get('nombreGP')?.value);
      this.aut.createMovie(body).subscribe((data:any)=>{
        console.log(data);
        alert('Se creo la pelicula.');

      },(e)=>{console.log(e);});
    }

    }
}

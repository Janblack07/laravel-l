import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-editarpelicula',
  templateUrl: './editarpelicula.component.html',
  styleUrls: ['./editarpelicula.component.css']
})
export class EditarpeliculaComponent {

  id:any;
  data:any;
  img!: File;
  image:any
  imageBlob: any = '';
  constructor(private aut:MoviesService, private router:Router, private route: ActivatedRoute) {
}
peliculasForm= new FormGroup({
  nombreP: new FormControl('', [Validators.required]),
  imagenP: new FormControl('', [Validators.required]),
  precioP: new FormControl('', [Validators.required]),
  duracionP : new FormControl('', [Validators.required]),
  estrenoP : new FormControl('', [Validators.required]),
  nombreGP : new FormControl('', [Validators.required]),

})
ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

        this.aut.oneMovie(this.id).subscribe((data:any)=>{
        this.data=data.Peliculas;
        this.image = data.Peliculas.url_imagenP;
        console.log(this.data);
        this.peliculasForm.setValue({
          "nombreP": this.data.nombreP,
          "imagenP": '',
          "precioP": this.data.precioP,
          "duracionP": this.data.duracionP,
          "estrenoP": this.data.estrenoP,
          "nombreGP": this.data.nombreGP,
        })
      });
}
onFileSelected(event:any) {
  this.img = event.target.files[0];

}
onUpdate(data:any){
  const body:any=new FormData();
      body.append('nombreP',this.peliculasForm.get('nombreP')?.value);
      body.append('imagenP',this.img);
      body.append('precioP',this.peliculasForm.get('precioP')?.value);
      body.append('duracionP',this.peliculasForm.get('duracionP')?.value);
      body.append('estrenoP',this.peliculasForm.get('estrenoP')?.value);
      body.append('nombreGP',this.peliculasForm.get('nombreGP')?.value);
  console.log(body);
  console.log(this.id);
  console.log(this.img);
   this.aut.updateMovie(this.id,body).subscribe((data:any) =>{
    alert('Se actualizo conrrectamente.');
    this.router.navigate(['/principal/pelicula/ver']);
  },(e)=>{console.log(e);})

}


}

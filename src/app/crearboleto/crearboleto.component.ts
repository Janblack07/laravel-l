import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ForSaleService } from '../service/for-sale.service';
import { HallMovieService } from '../service/hall-movie.service';

@Component({
  selector: 'app-crearboleto',
  templateUrl: './crearboleto.component.html',
  styleUrls: ['./crearboleto.component.css']
})
export class CrearboletoComponent {
venta: any;
id:any;
v:any;
boleto: any;
clienteForm= new FormGroup({
  nombreC: new FormControl('', [Validators.required,Validators.pattern("[a-zA-Z ]+")]),
  apellidoC: new FormControl('', [Validators.required,Validators.pattern("[a-zA-Z ]+")]),
  cedulaC: new FormControl('', [Validators.required,Validators.pattern("[0-9]{10}")]),
  correoC : new FormControl('', [Validators.required,Validators.email]),
  asientos : new FormControl('', [Validators.required]),

})
constructor(private bolet:ForSaleService, private sa:HallMovieService,private route:ActivatedRoute){}
ngOnInit(){
  this.cargar();
}
cargar(){
  this.id = this.route.snapshot.params['id'];
  this.sa.onehallMovie(this.id).subscribe((data:any)=>{
    console.log(data);
    this.boleto = data.SalaPelicula.boleto_sala
    console.log(this.boleto);
    this.v=data.SalaPelicula;
  },(e)=>{console.log(e);});
}


OnRegister(Form:any){
    console.log(Form);
    const body={
      "nombreC":Form.nombreC,
      "apellidoC":Form.apellidoC,
      "cedulaC":Form.cedulaC,
      "correoC":Form.correoC,
      "asientos":Form.asientos,
      "sala_pelicula_id":this.id
      }
      console.log(body);
    this.bolet.createforSale(body).subscribe((data:any)=>{
      console.log(data);
      alert('Se creo el boleto.');
    },(e)=>{console.log(e);});
  }

  }


import { Component, OnInit } from '@angular/core';
import { ForSaleService } from '../service/for-sale.service';

@Component({
  selector: 'app-ventadiaria',
  templateUrl: './ventadiaria.component.html',
  styleUrls: ['./ventadiaria.component.css']
})
export class VentadiariaComponent implements OnInit{
  venta:any
  ventaDiarias:any;
  constructor(private readonly v:ForSaleService){}
  ngOnInit(): void {
    this.consumirVentas()
  }
  consumirVentas(){
    this.v.forSaleTodays().subscribe((data:any)=>{
      console.log(data)
      this.venta=Object.entries(data.ventasMes)
      console.log(this.venta)
      /* this.venta=data.VentasDiaria */
    },(err)=>{
      console.log(err)
    })
  }

}

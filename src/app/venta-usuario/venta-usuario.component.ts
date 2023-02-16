import { Component,OnInit } from '@angular/core';
import { ForSaleService } from '../service/for-sale.service';

@Component({
  selector: 'app-venta-usuario',
  templateUrl: './venta-usuario.component.html',
  styleUrls: ['./venta-usuario.component.css']
})
export class VentaUsuarioComponent implements OnInit {
  venta!:any
  constructor(private readonly v:ForSaleService){}
  ngOnInit(): void {
    this.consumirVentas()
  }
  consumirVentas(){
    this.v.forSaleTodaysUser().subscribe((data:any)=>{
      console.log(data)
      this.venta=data.ventasMes
      console.log(this.venta)
       /* this.venta=Object.entries(data.ventasMes)
       console.log(this.venta) */
    },(err)=>{
      console.log(err)
    })
  }
}

import { Component } from '@angular/core';
import { ForSaleService } from '../service/for-sale.service';

@Component({
  selector: 'app-verventa',
  templateUrl: './verventa.component.html',
  styleUrls: ['./verventa.component.css']
})
export class VerventaComponent {
  venta:any;
  constructor(private ver:ForSaleService){}
  ngOnInit(): void {
    this.getDatos()
  }
  getDatos(){
    this.ver.allforSale().subscribe((data:any)=>{
      this.venta=data.Ventas[0]
      console.log(this.venta)
    },(err)=>{
      console.log(err)
    })
  }

}

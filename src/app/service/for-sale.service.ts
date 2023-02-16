import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForSaleService {

  private api='http://127.0.0.1:8000/api/';
  constructor(private http: HttpClient) { }
  allforSale(){ //usuario que vendio cliente que compro sala que adquirio yventa

    return this.http.get(`${this.api}ventas`);
  }
  oneforSale(id:any){
    return this.http.get(`${this.api}ventas/${id}`);
  }
  createforSale(body:any){
    return this.http.post(this.api+'ventas',body);
  }
  listforSale(){ //listado de boletos diarios con datos de persona
    return this.http.get(`${this.api}ventaslis`);
  }
  forSaleTodays(){ //cantidad de dolares ventas diarios
    return this.http.get(`${this.api}VentaD`);
  }
  forSaleTodaysUser(){ //ventas por usuario
    return this.http.get(`${this.api}VentaDU`);
  }

}

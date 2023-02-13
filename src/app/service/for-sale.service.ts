import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForSaleService {

  private api='http://127.0.0.1:8000/api/';
  constructor(private http: HttpClient) { }
  allforSale(){

    return this.http.get(`${this.api}ventas`);
  }
  oneforSale(id:any){
    return this.http.get(`${this.api}ventas/${id}`);
  }
  createforSale(body:any){
    return this.http.post(this.api+'ventas',body);
  }
  listforSale(){
    return this.http.get(`${this.api}ventaslis`);
  }
  forSaleTodays(){
    return this.http.get(`${this.api}VentaD`);
  }
  forSaleTodaysUser(){
    return this.http.get(`${this.api}VentaDU`);
  }

}

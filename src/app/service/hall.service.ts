import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HallService {
  private api='http://127.0.0.1:8000/api/';
  constructor(private http: HttpClient) { }
  createhall(body:any){

    return this.http.post(this.api+'salas',body);

  }
  updateHall(body:any,id:any){

    return this.http.post(`${this.api}salas/${id}`,body);

  }
  destroyHall(id:any){

    return this.http.delete(`${this.api}salas/${id}`);

  }
  allHall(){

    return this.http.get(`${this.api}salas`);
  }

  oneHall(id:any){
    return this.http.get(`${this.api}salas/${id}`);
  }



}


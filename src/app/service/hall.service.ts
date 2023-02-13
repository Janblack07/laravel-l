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
  updateMovie(body:any,id:any){

    return this.http.post(`${this.api}salas/${id}`,body);

  }
  destroyMovie(id:any){

    return this.http.delete(`${this.api}salas/${id}`);

  }
  allMovie(){

    return this.http.get(`${this.api}salas`);
  }

  oneMovie(id:any){
    return this.http.get(`${this.api}salas/${id}`);
  }



}


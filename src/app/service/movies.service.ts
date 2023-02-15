import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private api='http://127.0.0.1:8000/api/';
  constructor(private http: HttpClient) {

   }


   createMovie(body:any){

    return this.http.post(this.api+'peliculas',body);

  }
  updateMovie(id:any,body:any){

    return this.http.post(`${this.api}peliculas/${id}`,body);

  }
  destroyMovie(id:any){

    return this.http.delete(`${this.api}peliculas/${id}`);

  }
  allMovie(){

    return this.http.get(`${this.api}peliculas`,{
      headers:{'Authorization': 'Bearer ' + localStorage.getItem('token')}});
  }

  oneMovie(id:any){
    return this.http.get(`${this.api}peliculas/${id}`);
  }
}

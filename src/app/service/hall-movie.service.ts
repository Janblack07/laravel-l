import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HallMovieService {
  private api='http://127.0.0.1:8000/api/';
  constructor(private http: HttpClient) { }

  createhallMovie(body:any){

    return this.http.post(this.api+'salapelicula',body);

  }
  allhallMovie(){

    return this.http.get(`${this.api}salapelicula`);
  }
  onehallMovie(id:any){
    return this.http.get(`${this.api}salapelicula/${id}`);
  }

}

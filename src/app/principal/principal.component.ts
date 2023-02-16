import { Component, OnInit} from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit   {
  usuario!:any
  rol!:any
  constructor(private user:AuthenticationService){}
  ngOnInit(): void {
    this.user.userProfile().subscribe((data:any)=>{
      console.log(data.rol)
      this.rol=data.rol
    })
  }

}

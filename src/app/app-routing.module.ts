import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoletoComponent } from './boleto/boleto.component';
import { EditarpeliculaComponent } from './editarpelicula/editarpelicula.component';
import { EditarsalaComponent } from './editarsala/editarsala.component';
import { IngresarpeliculaComponent } from './ingresarpelicula/ingresarpelicula.component';
import { IngresarsalaComponent } from './ingresarsala/ingresarsala.component';
import { IngresarsalapeliculaComponent } from './ingresarsalapelicula/ingresarsalapelicula.component';
import { LoginComponent } from './login/login.component';
import { MyGuardGuard } from './my-guard.guard';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { PrincipalComponent } from './principal/principal.component';
import { RegisterComponent } from './register/register.component';
import { SalaComponent } from './sala/sala.component';
import { SalapeliculaComponent } from './salapelicula/salapelicula.component';
import { VerboletoComponent } from './verboleto/verboleto.component';
import { VerpeliculaComponent } from './verpelicula/verpelicula.component';
import { VersalaComponent } from './versala/versala.component';
import { VersalapeliculaComponent } from './versalapelicula/versalapelicula.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},
  {path: 'principal', component: PrincipalComponent,canActivate:[MyGuardGuard],children:[

    {path: 'pelicula', component: PeliculaComponent, children:[
    {path:'crear',component:IngresarpeliculaComponent},
    {path:'ver',component:VerpeliculaComponent},
    {path:'editar/:id',component:EditarpeliculaComponent},
    ]},
    {path: 'sala', component: SalaComponent, children:[
      {path:'crear',component:IngresarsalaComponent},
      {path:'ver',component:VersalaComponent},
      {path:'editar/:id',component:EditarsalaComponent},
    ]},
    {path: 'sala_pelicula', component: SalapeliculaComponent, children:[
      {path:'crear',component:IngresarsalapeliculaComponent},
      {path:'ver',component:VersalapeliculaComponent},
    ]},
    {path: 'boleto', component: BoletoComponent, children:[
      {path:'ver',component:VerboletoComponent},
      {path:'crear',component:VersalapeliculaComponent},
    ]}
  ] },//cambiar

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

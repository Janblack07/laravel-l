import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PrincipalComponent } from './principal/principal.component';
import { AuthInterceptorService } from './service/auth-interceptor.service';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { IngresarpeliculaComponent } from './ingresarpelicula/ingresarpelicula.component';
import { EditarpeliculaComponent } from './editarpelicula/editarpelicula.component';
import { SalaComponent } from './sala/sala.component';
import { IngresarsalaComponent } from './ingresarsala/ingresarsala.component';
import { EditarsalaComponent } from './editarsala/editarsala.component';
import { CardpeliculaComponent } from './cardpelicula/cardpelicula.component';
import { CardsalaComponent } from './cardsala/cardsala.component';
import { VersalaComponent } from './versala/versala.component';
import { VerpeliculaComponent } from './verpelicula/verpelicula.component';
import { SalapeliculaComponent } from './salapelicula/salapelicula.component';
import { VersalapeliculaComponent } from './versalapelicula/versalapelicula.component';
import { IngresarsalapeliculaComponent } from './ingresarsalapelicula/ingresarsalapelicula.component';
import { BoletoComponent } from './boleto/boleto.component';
import { VerboletoComponent } from './verboleto/verboleto.component';
import { CrearboletoComponent } from './crearboleto/crearboleto.component';
import { VentadiariaComponent } from './ventadiaria/ventadiaria.component';
import { VentaUsuarioComponent } from './venta-usuario/venta-usuario.component';
import { VentaComponent } from './venta/venta.component';
import { VerventaComponent } from './verventa/verventa.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PrincipalComponent,
    PeliculaComponent,
    IngresarpeliculaComponent,
    EditarpeliculaComponent,
    SalaComponent,
    IngresarsalaComponent,
    EditarsalaComponent,
    CardpeliculaComponent,
    CardsalaComponent,
    VersalaComponent,
    VerpeliculaComponent,
    SalapeliculaComponent,
    VersalapeliculaComponent,
    IngresarsalapeliculaComponent,
    BoletoComponent,
    VerboletoComponent,
    CrearboletoComponent,
    VentadiariaComponent,
    VentaUsuarioComponent,
    VentaComponent,
    VerventaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule



  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

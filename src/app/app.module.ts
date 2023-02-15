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
    VerpeliculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,




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

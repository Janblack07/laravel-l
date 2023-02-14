import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MyGuardGuard } from './my-guard.guard';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},
  {path: 'principal', component:RegisterComponent,canActivate:[MyGuardGuard]}//cambiar
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

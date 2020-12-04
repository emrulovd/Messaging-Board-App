import { Routes, RouterModule, Router } from '@angular/router';
import { NgModule } from '@angular/core'

import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';


const appRoutes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'auth', component: AuthComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
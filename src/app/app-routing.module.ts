import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

/*Aca definimos el ruteo de componentes que generamos(solo principales)*/
const routes: Routes = [{ path: 'Home', component: HomeComponent },
{ path: '', component: HomeComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

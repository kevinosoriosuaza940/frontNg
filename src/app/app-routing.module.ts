import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { ConsultarhorasComponent } from './components/consultarhoras/consultarhoras.component';
import { IngresarservicioComponent } from './components/ingresarservicio/ingresarservicio.component';
import { HomeComponent } from './components/home/home.component'

const routes: Routes = [
  { path: '', pathMatch: 'full',redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  { path: 'consultarhoras', component: ConsultarhorasComponent},
  { path: 'ingresarservicio', component: IngresarservicioComponent},
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

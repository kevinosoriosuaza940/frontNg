import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { IngresarservicioComponent } from './components/ingresarservicio/ingresarservicio.component';
import { ConsultarhorasComponent } from './components/consultarhoras/consultarhoras.component';
import { HomeComponent } from './components/home/home.component';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ButtonComponent,
    IngresarservicioComponent,
    ConsultarhorasComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

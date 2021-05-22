import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  
  title:string="";
  ruta:string="";

  constructor(private router: Router){}

  ngOnInit():void{
    this.ruta = this.router.url
  }  
  
  ngOnChanges():void{
    this.ruta = this.router.url
  }
}

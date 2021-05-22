import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges {
 
  
  @Input() titulo:string ='';
  @Input() ruta:string="";

  constructor(private router: Router) 
  { 
   
   

  }

  ngOnChanges():void{
    console.log(this.ruta)

  }
  ngOnInit(): void {
  }

}

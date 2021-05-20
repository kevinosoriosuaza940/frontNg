import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  
  title: string;

  constructor(private router: Router) {
    this.title = "Button";
    
  }
  
  onClick(pRuta: string){
  }

  ngOnInit(): void {
  }
  onSubmit(){
   
  }

}

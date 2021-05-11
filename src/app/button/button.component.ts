import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  
  title: string = "Home";

  constructor(private router: Router) {}
  
  onClick(pRuta: string){
  }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() title: string ="";
  @Input() estilo:boolean=true;

  constructor(private router: Router) {}

  onClick(pRuta: string) {}

  ngOnInit(): void {}
  onSubmit() {}
}

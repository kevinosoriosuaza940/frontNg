import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ingresarservicio',
  templateUrl: './ingresarservicio.component.html',
  styleUrls: ['./ingresarservicio.component.css'],
})
export class IngresarservicioComponent implements OnInit {
  formulario: FormGroup;

  constructor() {
    this.formulario = new FormGroup({
      idtecnico: new FormControl('', [Validators.required]),
      tiposervicio: new FormControl('', [Validators.required]),
      fechainicio: new FormControl('', [Validators.required]),
      fechafin: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}
  onSubmit() {
    console.log(this.formulario.value);
  }
  
}


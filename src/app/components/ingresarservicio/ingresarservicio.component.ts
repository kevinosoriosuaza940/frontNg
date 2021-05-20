import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ingresarservicio',
  templateUrl: './ingresarservicio.component.html',
  styleUrls: ['./ingresarservicio.component.css']
})
export class IngresarservicioComponent implements OnInit {

  formulario: FormGroup;

  constructor() {
    this.formulario = new FormGroup({

      idtecnico: new FormControl(),
      tiposervicio: new FormControl(),
      fechainicio: new FormControl(),
      fechafin: new FormControl(),
      
    }

    )
  }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.formulario.value);
  }
}

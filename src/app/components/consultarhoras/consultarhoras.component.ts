import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-consultarhoras',
  templateUrl: './consultarhoras.component.html',
  styleUrls: ['./consultarhoras.component.css']
})
export class ConsultarhorasComponent implements OnInit {
 
  formulario: FormGroup;

 

  constructor() {

    this.formulario = new FormGroup({

      idtecnico: new FormControl('', [
        Validators.required,
      
      ]),
      numerosemana: new FormControl('', [
        Validators.required,


      ])
      
    }

    )
  }
  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.formulario.value);
  }
}

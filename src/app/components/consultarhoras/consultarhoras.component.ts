import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-consultarhoras',
  templateUrl: './consultarhoras.component.html',
  styleUrls: ['./consultarhoras.component.css']
})
export class ConsultarhorasComponent implements OnInit {
 
  formulario: FormGroup;

 

  constructor() {

    this.formulario = new FormGroup({

      idtecnico: new FormControl(''),
      numerosemana: new FormControl('')
      
    }

    )
  }
  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.formulario.value);
  }
}

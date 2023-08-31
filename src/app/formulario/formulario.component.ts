import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{
  formulario: FormGroup;
  constructor(private FormBuilder: FormBuilder){
    this.formulario = this.FormBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required]
    });
    }
    ngOnInit(): void{

    }

    onSubmit(){
      if (this.formulario.valid){
        console.log(this.formulario.value);
      }else {
        console.log("Formulario Inválido completar todos los campos.")
      }
    }
  }


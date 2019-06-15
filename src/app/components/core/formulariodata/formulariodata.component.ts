import { NgForm, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { reject } from 'q';
import { formularioForm } from '../../../interface/formulario.interface';
import { FormularioService } from '../../../services/formulario.service';





@Component({
  selector: 'app-formulariodata',
  templateUrl: './formulariodata.component.html',
  styleUrls: ['./formulariodata.component.css']
})
export class FormulariodataComponent implements OnInit {
  forma: FormGroup;
  enviarDatos: any;
  ngOnInit(): void {
    throw new Error();
  }


  constructor(private _formularioService:FormularioService) {
    this.forma = new FormGroup({

       'nombre': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'apellidos': new FormControl('', Validators.required ),
    'correo': new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')], this.enviarDatos)
    });
  };

}

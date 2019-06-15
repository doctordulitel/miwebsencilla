import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { formularioForm } from '../../../interface/formulario.interface';
import {FormularioService} from '../../../services/formulario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
 // public formularioForm: FormGroup;
 // private _formularioService: FormularioService;
 // form: any;


  constructor(db: AngularFireDatabase, private formBuilder: FormBuilder,  router:Router,
     private route: ActivatedRoute) {

   //   this.form = db.list('/contactar');
    //  console.log(this.form);

      }

      addBoard(newBoardName: string) {
    //    this.form.push({name: newBoardName});
    }
 // nuevo:boolean = false;
//  id:string;

  guardar() {
  //  console.log(this.formularioForm);
   // this._formularioService.nuevoContacto(this.form){
     // this.route.navigate(['/contactar', name]);

     //  insertando
     // this._formularioService.nuevoContacto(this.form).subscribe(data => {
     // this.route.navigate(['/contacto', data.name]);

      }
  }


// ngOnInit(){
//   this.buildForm();
// }
//
// buildForm(){
// this.formularioForm = this.formBuilder.group({
//   nombre: ['',[Validators.required, Validators.minLength(3)]],
//   apellidos: ['',[ Validators.required]],
//   telefono:['',[ Validators.minLength(9)]],
//   correo:['', [Validators.required, Validators.email] ],
//   mensaje:['', Validators.required]
// });
//
// }
//
// mostrarError(fieldName: string){
//   const error = this.formularioForm.get(fieldName);
//   return (error.touched || error.dirty) && error.errors;
// }
//
//
// onSubmit(){
//   console.log(this.formularioForm.value);
// }
//
//
//
// }



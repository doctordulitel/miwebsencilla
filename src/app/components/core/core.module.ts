import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JumboComponent } from './jumbo/jumbo.component';
import { PieComponent } from './pie/pie.component';
import { Jumbo2Component } from './jumbo2/jumbo2.component';
import { SlideComponent } from './slide/slide.component';
import { FormularioComponent } from './formulario/formulario.component';


import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { FormulariodataComponent } from './formulariodata/formulariodata.component';
import { FormularioeditComponent } from './formulario/formularioedit.component';
import { FormulariopruebaComponent } from './components/core/formularioprueba/formularioprueba.component';
import { Jumbo3Component } from './jumbo3/jumbo3.component';
import { PreciosComponent } from './precios/precios.component';

@NgModule({
  declarations: [JumboComponent, PieComponent,
// tslint:disable-next-line: max-line-length
    Jumbo2Component, SlideComponent, FormularioComponent, FormulariodataComponent, FormularioeditComponent, FormulariopruebaComponent, Jumbo3Component, PreciosComponent],
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule
  ],
  // tslint:disable-next-line:max-line-length
  exports: [JumboComponent, PieComponent, Jumbo2Component, Jumbo3Component,  PreciosComponent, SlideComponent, FormularioComponent, FormulariodataComponent, FormulariopruebaComponent]
})
export class CoreModule { }

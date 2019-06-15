
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ServiciosRoutingModule} from './servicios.routing';
import { ServiciosComponent } from './servicios.component';



@NgModule({
  declarations: [ServiciosComponent ],
  imports: [
    CommonModule,
    ServiciosRoutingModule,


  ]
})
export class ServiciosModule { }

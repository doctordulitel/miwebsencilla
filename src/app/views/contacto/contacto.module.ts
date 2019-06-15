import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from './contacto.component';
import { FormsModule } from '@angular/forms';
import { ContactoRoutingModule } from './contacto.routing';
import { CoreModule } from '../../components/core/core.module';



@NgModule({
  declarations: [ContactoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ContactoRoutingModule,
    CoreModule
  ]
})
export class ContactoModule { }




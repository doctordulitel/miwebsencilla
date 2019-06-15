
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './views/notfound/notfound.component';
import {InicioComponent} from './views/inicio/inicio.component';
import {ServiciosComponent} from './views/servicios/servicios.component';
import {ContactoComponent} from './views/contacto/contacto.component';
import {AppComponent} from './app.component';

import { FormularioeditComponent } from './components/core/formulario/formularioedit.component';




const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'servicios', loadChildren: './views/servicios/servicios.module#ServiciosModule' },
  { path: 'contacto', loadChildren: './views/contacto/contacto.module#ContactoModule' },
  { path: 'contacto/:id', component: FormularioeditComponent },
  { path: '404', component: NotfoundComponent },
  { path: '**',  redirectTo: '/404'  }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

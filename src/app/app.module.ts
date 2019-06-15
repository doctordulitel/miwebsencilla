
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireObject, AngularFireList } from 'angularfire2/database';
import { environment } from '../environments/environment';
// RUTAS

import { AppRoutingModule } from './app-routing.module';

// SERVICIOS

import {FormularioService} from './services/formulario.service';




import { AppComponent } from './app.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { FooterComponent } from './views/footer/footer.component';
import { SliderComponent } from './views/slider/slider.component';
import { NotfoundComponent } from './views/notfound/notfound.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { Content1Component } from './views/content1/content1.component';
import { CoreModule } from './components/core/core.module';
import { MenuComponent } from './components/core/menu/menu.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SliderComponent,
   NotfoundComponent,
    InicioComponent,
    Content1Component,
    MenuComponent


  ],
   imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase, 'MWS'),
    AngularFireDatabaseModule,
    AngularFirestoreModule

  ],
  providers: [FormularioService],
  bootstrap: [AppComponent],
  exports: [MenuComponent]
})
export class AppModule {

 }

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { routing } from './app.routing';

import { AppComponent }       from './app.component';
import { HomeComponent }       from './components/home.component';
import { ContactoComponent }  from './components/contacto.component';
import { ProductosComponent }  from './components/productos.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, routing ],
  declarations: [ AppComponent, ContactoComponent, ProductosComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
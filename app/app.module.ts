import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { routing } from './app.routing';

import { AppComponent }       from './app.component';
import { HomeComponent }       from './components/home.component';
import { ProductosComponent }  from './components/productos.component';
import { CrearProductoComponent }  from './components/crear-producto.component';
import { ContactoComponent }  from './components/contacto.component';

import { ProductosService } from './services/productos.service'

@NgModule({
  imports:      [ BrowserModule, FormsModule, routing ],
  declarations: [ AppComponent, ContactoComponent, ProductosComponent, HomeComponent, CrearProductoComponent ],
  providers:    [ ProductosService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
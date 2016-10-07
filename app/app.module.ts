import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { routing } from './app.routing';

import { AppComponent }       from './app.component';
import { HomeComponent }       from './components/home.component';
import { ProductosComponent }  from './components/productos.component';
import { CrearProductoComponent }  from './components/crear-producto.component';
import { DetalleProductoComponent }  from './components/detalle-producto.component';
import { ContactoComponent }  from './components/contacto.component';

import { ProductosService } from './services/productos.service'

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing ],
  declarations: [ AppComponent, HomeComponent, ProductosComponent, DetalleProductoComponent, CrearProductoComponent, ContactoComponent ],
  providers:    [ ProductosService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
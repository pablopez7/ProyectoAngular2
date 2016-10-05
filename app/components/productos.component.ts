import { Component } from '@angular/core';
import { Producto } from '../models/productos.model';

@Component({
  selector: 'productos',
  templateUrl: '/app/views/productos.html'
})

export class ProductosComponent {
  public producto:Producto
  
  constructor(){
    this.producto = new Producto(1, 'Crema Facial', './carpeta/crema.jpg')
  }
  
}
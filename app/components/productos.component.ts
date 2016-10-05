import { Component } from '@angular/core'

import { Producto } from '../models/productos.model'
import { ProductosService } from '../services/productos.service'

@Component({
  selector: 'productos',
  templateUrl: '/app/views/productos.html'
})

export class ProductosComponent {
  public producto:Producto
  public productos:Array<Producto>
  
  constructor(private _productosService: ProductosService){
    this.productos = this._productosService.getProductos()
    console.log(this.productos)
  }

}
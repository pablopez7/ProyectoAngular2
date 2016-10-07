import { Component } from '@angular/core';

import { Producto } from '../models/productos.model'
import { ProductosService } from '../services/productos.service'

@Component({
  selector: 'crear-producto',
  templateUrl: '/app/views/crear-producto.html'
})

export class CrearProductoComponent {

    constructor(private _productosService: ProductosService){}
    onCrearProducto(id, nombre, directorio, descripcion, estatus){
        let producto: Producto = new Producto(id, nombre, directorio, descripcion, true)
        this._productosService.insertProducto(producto)
        
    }
}
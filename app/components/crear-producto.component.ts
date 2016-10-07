import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { Producto } from '../models/productos.model'
import { ProductosService } from '../services/productos.service'

@Component({
    moduleId: module.id,
    selector: 'crear-producto',
    templateUrl: '/app/views/crear-producto.html'
})

export class CrearProductoComponent {

    constructor(
        private _productosService: ProductosService,
        private _router: Router) { }

    onCrearProducto(id, nombre, directorio, descripcion, estatus) {
        let producto: Producto = new Producto(id, nombre, directorio, descripcion, true)
        this._productosService.insertProducto(producto)

        this._router.navigate(["productos"])
    }

}
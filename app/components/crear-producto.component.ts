import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router'

import { Producto } from '../models/productos.model'
import { ProductosService } from '../services/productos.service'

@Component({
    moduleId: module.id,
    selector: 'crear-producto',
    templateUrl: '/app/views/crear-producto.html'
})

export class CrearProductoComponent implements OnInit {
    producto: Producto

    constructor(
        private _productosService: ProductosService,
        private _router: Router,
        private _route: ActivatedRoute) { }

    onCrearProducto(id, nombre, directorio, descripcion, estatus) {
        let producto: Producto = new Producto(id, nombre, directorio, descripcion, true)
        this._productosService.insertProducto(producto)

        this._router.navigate(["productos"])
    }

    ngOnInit(): void {
        this._route.params.forEach((params: Params) => {
            let id = +params['id']
            this._productosService.getProducto(id)
                .then(producto => this.producto = producto)
        })
    }

}
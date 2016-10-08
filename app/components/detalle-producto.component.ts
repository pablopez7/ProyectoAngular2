import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, Params } from '@angular/router'

import { Producto } from '../models/productos.model'
import { ProductosService } from '../services/productos.service'

@Component({
  moduleId: module.id,
  selector: 'detalle-producto',
  templateUrl: '/app/views/detalle-producto.html'

})
export class DetalleProductoComponent implements OnInit {
  producto: Producto

  constructor(
    private _productosService: ProductosService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit(): void {
    this._route.params.forEach((params: Params) => {
      let id = +params['id']
      this._productosService.getProducto(id)
        .then(producto => this.producto = producto)
    })
  }


    volver(){
        this._router.navigate(['/productos']);
    }
}
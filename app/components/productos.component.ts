import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routing } from '../app.routing';

import { Producto } from '../models/productos.model'
import { ProductosService } from '../services/productos.service'

@Component({
  moduleId: module.id,
  selector: 'productos',
  templateUrl: '/app/views/productos.html'
})

export class ProductosComponent implements OnInit {

  public producto: Producto
  public productos: Array<Producto>

  constructor(private _router: Router,
    private _productosService: ProductosService) {
    this.productos = this._productosService.getProductos()
  }

  ngOnInit(): void {
    this._productosService.getProduct()
  }

  gotoDetail(producto: Producto): void {
    let link = ['/detalle-producto', producto.id];
    this._router.navigate(link);
  }

}
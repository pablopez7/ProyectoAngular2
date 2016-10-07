import { Injectable } from '@angular/core';

import { Producto } from '../models/productos.model';
import { PRODUCTOS } from './mock-productos';

@Injectable()
export class ProductosService {

    getProductos(): Producto[] {
        return PRODUCTOS
    }

    insertProducto(producto: Producto){
        Promise.resolve(PRODUCTOS).then((productos: Producto[]) => productos.push(producto))
    }
}
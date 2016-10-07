import { Injectable } from '@angular/core';

import { Producto } from '../models/productos.model';
import { PRODUCTOS } from './mock-productos';

@Injectable()
export class ProductosService {

    getProductos(): Producto[] {
        return PRODUCTOS
    }

    insertProducto(producto: Producto) {
        Promise.resolve(PRODUCTOS).then((productos: Producto[]) => productos.push(producto))
    }

    getProduct(): Promise<Producto[]> {
        return Promise.resolve(PRODUCTOS);
    }

    getProducto(id: number): Promise<Producto> {
        return this.getProduct()
            .then(producto => producto.find(Producto => Producto.id === id));
    }

}
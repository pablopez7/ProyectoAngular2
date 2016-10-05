import { Injectable } from '@angular/core';

@Injectable()
export class ProductosService {
    getProductos(){
        return "Hola desde un servicio"
    }
}
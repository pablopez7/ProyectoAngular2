"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var productos_model_1 = require('../models/productos.model');
var ProductosComponent = (function () {
    function ProductosComponent() {
        this.producto = new productos_model_1.Producto(1, 'Crema Facial', './carpeta/crema.jpg');
    }
    ProductosComponent = __decorate([
        core_1.Component({
            selector: 'productos',
            templateUrl: '/app/views/productos.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ProductosComponent);
    return ProductosComponent;
}());
exports.ProductosComponent = ProductosComponent;
//# sourceMappingURL=productos.component.js.map
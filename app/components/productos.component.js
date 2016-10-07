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
var router_1 = require('@angular/router');
var productos_service_1 = require('../services/productos.service');
var ProductosComponent = (function () {
    function ProductosComponent(_router, _productosService) {
        this._router = _router;
        this._productosService = _productosService;
        this.productos = this._productosService.getProductos();
    }
    ProductosComponent.prototype.ngOnInit = function () {
        this._productosService.getProduct();
    };
    ProductosComponent.prototype.gotoDetail = function (producto) {
        var link = ['/detalle-producto', producto.id];
        this._router.navigate(link);
    };
    ProductosComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'productos',
            templateUrl: '/app/views/productos.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, productos_service_1.ProductosService])
    ], ProductosComponent);
    return ProductosComponent;
}());
exports.ProductosComponent = ProductosComponent;
//# sourceMappingURL=productos.component.js.map
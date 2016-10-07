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
var productos_model_1 = require('../models/productos.model');
var productos_service_1 = require('../services/productos.service');
var CrearProductoComponent = (function () {
    function CrearProductoComponent(_productosService, _router, _route) {
        this._productosService = _productosService;
        this._router = _router;
        this._route = _route;
    }
    CrearProductoComponent.prototype.onCrearProducto = function (id, nombre, directorio, descripcion, estatus) {
        var producto = new productos_model_1.Producto(id, nombre, directorio, descripcion, true);
        this._productosService.insertProducto(producto);
        this._router.navigate(["productos"]);
    };
    CrearProductoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = +params['id'];
            _this._productosService.getProducto(id)
                .then(function (producto) { return _this.producto = producto; });
        });
    };
    CrearProductoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'crear-producto',
            templateUrl: '/app/views/crear-producto.html'
        }), 
        __metadata('design:paramtypes', [productos_service_1.ProductosService, router_1.Router, router_1.ActivatedRoute])
    ], CrearProductoComponent);
    return CrearProductoComponent;
}());
exports.CrearProductoComponent = CrearProductoComponent;
//# sourceMappingURL=crear-producto.component.js.map
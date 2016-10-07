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
var DetalleProductosComponent = (function () {
    function DetalleProductosComponent(_productosService, _route) {
        this._productosService = _productosService;
        this._route = _route;
    }
    DetalleProductosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = +params['id'];
            _this._productosService.getProducto(id)
                .then(function (producto) { return _this.producto = producto; });
        });
    };
    DetalleProductosComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'detalle-productos',
            template: "\n  <div *ngIf=\"producto\">\n    <h2>{{producto.nombre}} details!</h2>\n    <div><label>id: </label>{{producto.id}}</div>\n    <div>\n      <label>Nombre: </label>\n      <input [(ngModel)]=\"producto.nombre\" placeholder=\"nombre\"/>\n    </div>\n  </div>\n"
        }), 
        __metadata('design:paramtypes', [productos_service_1.ProductosService, router_1.ActivatedRoute])
    ], DetalleProductosComponent);
    return DetalleProductosComponent;
}());
exports.DetalleProductosComponent = DetalleProductosComponent;
//# sourceMappingURL=detalles-productos.component.js.map
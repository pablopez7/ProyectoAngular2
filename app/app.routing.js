"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./components/home.component');
var productos_component_1 = require('./components/productos.component');
var crear_producto_component_1 = require('./components/crear-producto.component');
var detalle_producto_component_1 = require('./components/detalle-producto.component');
var contacto_component_1 = require('./components/contacto.component');
var appRoutes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'index', component: home_component_1.HomeComponent },
    { path: 'productos', component: productos_component_1.ProductosComponent },
    { path: 'crear-producto', component: crear_producto_component_1.CrearProductoComponent },
    { path: 'detalle-producto/:id', component: detalle_producto_component_1.DetalleProductoComponent },
    { path: 'contacto', component: contacto_component_1.ContactoComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map
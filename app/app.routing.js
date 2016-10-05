"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./components/home.component');
var contacto_component_1 = require('./components/contacto.component');
var productos_component_1 = require('./components/productos.component');
var appRoutes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'index', component: home_component_1.HomeComponent },
    { path: 'contacto', component: contacto_component_1.ContactoComponent },
    { path: 'productos', component: productos_component_1.ProductosComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map
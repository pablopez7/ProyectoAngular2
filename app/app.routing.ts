import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }       from './components/home.component';
import { ProductosComponent }  from './components/productos.component';
import { CrearProductoComponent }  from './components/crear-producto.component';
import { DetalleProductoComponent }  from './components/detalle-producto.component';
import { ContactoComponent }  from './components/contacto.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'index', component: HomeComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'crear-producto', component: CrearProductoComponent },
    { path: 'detalle-producto/:id', component: DetalleProductoComponent },
    { path: 'contacto', component: ContactoComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
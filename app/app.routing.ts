import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }       from './components/home.component';
import { ContactoComponent }  from './components/contacto.component';
import { ProductosComponent }  from './components/productos.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'index', component: HomeComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'productos', component: ProductosComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
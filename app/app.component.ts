import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
            <h1>{{titulo}}</h1>
            <nav>
              <a routerLink="/index" routerLinkActive="active">Home</a>
              <a routerLink="/productos" routerLinkActive="active">Productos</a>
              <a routerLink="/crear-producto" routerLinkActive="active">Crear Producto</a>
              <a routerLink="/contacto" routerLinkActive="active">Contacto</a>
            </nav>
            <router-outlet></router-outlet>
            `
})

export class AppComponent {
  titulo = 'Mi primer pagína en Angular 2'
}
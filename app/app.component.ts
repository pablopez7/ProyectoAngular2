import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
            <h1>{{titulo}}</h1>
            <nav>
              <a routerLink="/index">Home</a>
              <a routerLink="/productos">Productos</a>
              <a routerLink="/contacto">Contacto</a>
            </nav>
            <router-outlet></router-outlet>
            `
})

export class AppComponent {
  titulo = 'Mi primer pagína en Angular 2'
}
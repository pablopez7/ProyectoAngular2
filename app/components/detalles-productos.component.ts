import { Component, Input } from '@angular/core';

@Component({
  selector: 'detalle-productos',
  template: `
  <div *ngIf="producto">
    <h2>{{producto.name}} details!</h2>
    <div><label>id: </label>{{producto.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="producto.name" placeholder="name"/>
    </div>
  </div>
`
})
export class DetalleProductosComponent {
}
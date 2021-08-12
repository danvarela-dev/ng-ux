import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'clase-thumbnail',
  template: `
    <div class="thumbnail">
      <h2>{{ claseUx.nombre }}</h2>
      <div [ngClass]="fnColor()">
        <strong>{{ claseUx.horario }}</strong>
      </div>
      <div *ngIf="claseUx?.seccion">
        <span>Seccion: {{ claseUx?.seccion }}</span>
      </div>
      <div [hidden]="!claseUx?.seccion">
        <span>Seccion: {{ claseUx?.seccion }}</span>
      </div>

      <div [ngSwitch]="claseUx.horario">
        <span *ngSwitchCase="'8:00 PM'">Inicio Temprano</span>
        <span *ngSwitchCase="'4:00 PM'">Inicio Tardio</span>
      </div>
      <div>
        <span>{{ claseUx.ubicacion.campus }}</span>
        <span class="espaciador">{{ claseUx.ubicacion.aula }}</span>
      </div>
      <button class="btn btn-secondary" (click)="clickMe()">Click</button>
    </div>
  `,
  styles: [
    `
      .espaciador {
        margin-left: 1em;
      }

      .colorVerde {
        color: green;
      }

      .colorNaranja {
        color: orange;
      }
    `,
  ],
})
export class ClaseThumbnailComponent {
  @Input() claseUx: any;
  @Output() evtClaseUx = new EventEmitter();

  clickMe() {
    this.evtClaseUx.emit(this.claseUx.nombre);
  }

  fnColor() {
    return {
      colorVerde: this.claseUx.horario === '4:00 PM',
      colorNaranja: this.claseUx.horario === '8:00 PM',
    };
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'column-thumbnail',
  template: `
    <table class="table table-dark">
      <tbody>
        <tr *ngFor="let column of columnData.body" [hidden]="!column.visible">
          <td>{{ column.text }}</td>
          <td><input type="checkbox" id="col" name="columns" (click)="fnSetOff(column.id)" /></td>
        </tr>
      </tbody>
    </table>
  `,
})
export class ColumnThumbnailComponent {
  @Input() columnData: any;

  fnSetOff(id:any){
    this.columnData.body.map((row:any) => {
        if(row.id === id){
            row.visible=false;
        }
        return row;
    });
  }
}

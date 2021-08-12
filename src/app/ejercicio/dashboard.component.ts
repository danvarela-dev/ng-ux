import { Component } from '@angular/core';
import { ɵplatformCoreDynamicTesting } from '@angular/platform-browser-dynamic/testing';

@Component({
  selector: 'col-list',
  template: `
    <table class="table table-dark">
      <thead>
        <tr>
          <th *ngFor="let data of col_List" scope="col">{{ data.header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td *ngFor="let data of col_List">
       <column-thumbnail [columnData]="data"></column-thumbnail>
        </tr>
      </tbody>
    </table>
  `,
  styles: [
    `
      .table- {
        background: cyan;
      }
    `,
  ],
})
export class DashboardComponent {
  col_List = [
    {
      header: 'To Do',
      body: [
        {id:1, text: 'Task 1', visible: true },
        {id:2, text: 'Task 2', visible: true },
        {id:3, text: 'Task 3', visible: true },
        {id:4, text: 'Task 4', visible: true },
        {id:5, text: 'Task 5', visible: true },
      ],
    },
    {
      header: 'Done',
      body: [
        {id:6, text: 'Task 1', visible: true },
        {id:7, text: 'Task 2', visible: true },
        {id:8, text: 'Task 3', visible: true },
        {id:9, text: 'Task 4', visible: true },
        {id:10, text: 'Task 5', visible: true },
      ],
    },
    {
    header: 'In Progress',
    body: [
      {id:11, text: 'Task 1', visible: true },
      {id:12, text: 'Task 2', visible: true },
      {id:13, text: 'Task 3', visible: true },
      {id:14, text: 'Task 4', visible: true },
      {id:15, text: 'Task 5', visible: true },
    ],
  },
  ];
}

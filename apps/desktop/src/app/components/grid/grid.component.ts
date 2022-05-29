import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mfe-proto-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})

export class GridComponent {
  @Input() modules!: module[];

  constructor() {
    this.modules = [
      {
        title: 'module 1',
        content: 'content 1'
      }, {
        title: 'module 2',
        content: 'content 2'
      }, {
        title: 'module 3',
        content: 'content 3'
      }, {
        title: 'module 4',
        content: 'content 4'
      }, {
        title: 'module 5',
        content: 'content 5'
      }, {
        title: 'module 6',
        content: 'content 6'
      }

    ]
  }
}

export interface module {
  title: string;
  content: string;
}

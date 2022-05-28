import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mfe-proto-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {

  ngOnInit(): void {
    console.log('menu loaded');
  }
}

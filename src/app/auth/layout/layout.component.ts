import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'auth-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class AuthLayoutComponent implements OnInit {
  constructor() {}
  onClick() {
    console.log('hice click');
  }
  ngOnInit(): void {}
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() label: string = '';
  @Input() btnStyle: 'primary' | 'secondary' | 'loading' = 'primary';
  @Input() disabled: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}

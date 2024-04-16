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
  @Input() loading: boolean = false;
  constructor() {}
  isDisabled(): boolean {
    return this.disabled || this.loading;
  }
  ngOnInit(): void {}
}

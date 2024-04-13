import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() error: boolean = false;
  @Input() errorMessage: string = '';
  @Input() label: string = '';
  @Input() icon: string = '';
  public id = new Date().getTime;
  constructor() {}

  ngOnInit(): void {}
}

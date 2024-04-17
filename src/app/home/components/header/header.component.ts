import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'home-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() menuIconClicked: EventEmitter<any> = new EventEmitter();
  constructor() { }

  onClick() {
    this.menuIconClicked.emit()
  }
  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/auth/interfaces';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css'],
})
export class HomeLayoutComponent implements OnInit {
  constructor(private authService: AuthService) {}
  get user() {
    return this.authService.currentUser;
  }

  ngOnInit(): void {}
}

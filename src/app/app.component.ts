import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { AuthStatus } from './auth/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}
  finishAuthCheck(): boolean {
    if (this.authService.authStatus === AuthStatus.checking) {
      return false;
    }
    return true;
  }
  ngOnInit(): void {
    this.authService.autoLogin();
  }
  title = 'moexClient';
}

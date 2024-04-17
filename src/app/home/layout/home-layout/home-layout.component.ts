import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css'],
})
export class HomeLayoutComponent implements OnInit {
  public toggleMenu:boolean = false;
  constructor(private authService: AuthService,private router:Router) {}
  get user() {
    return this.authService.currentUser;
  }
  handleMenuIconClicked(){
    this.toggleMenu = !this.toggleMenu
    
  }
  ngOnInit(): void {
    switch (this.authService.currentUser?.type) {
      case 'negocio':
        this.router.navigateByUrl('/home/shop');
        break;
      case 'cadete':
        this.router.navigateByUrl('/home/driver');
        break;
      case 'admin':
        this.router.navigateByUrl('/home/admin');
        break;
      // default:
      //   // Redirigir a una página de acceso no autorizado o cualquier otra página deseada
      //   this.router.navigateByUrl('/unauthorized');
      //   break;
    }
  }
}

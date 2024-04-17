import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'home-sidebar-mobile',
  templateUrl: './sidebar-mobile.component.html',
  styleUrls: ['./sidebar-mobile.component.css']
})
export class SidebarMobileComponent implements OnInit {
 
  constructor(private authService :AuthService) { }
  public rol = this.authService.currentUser?.type
  logout(){
    this.authService.logout()
  }
  ngOnInit(): void {
  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'home-sidebar-mobile',
  templateUrl: './sidebar-mobile.component.html',
  styleUrls: ['./sidebar-mobile.component.css']
})
export class SidebarMobileComponent implements OnInit {
@Output() linkClicked :EventEmitter<any> = new EventEmitter();
  constructor(private authService :AuthService) { }
  public rol = this.authService.currentUser?.type
  public shopRoutes=[
    {
      title:"Nuevo pedido",
      route:"/home/shop/newProduct",
      icon:"fa-solid fa-plus"
    },
    {
      title:"Tus pedidos",
      route:"/home/shop",
      icon:"fa-solid fa-cubes-stacked"
    },
    {
      title:"Perfil",
    route:"/home/shop/profile",
    icon:"fa-solid fa-user"
    }
  ]

  public driverRoutes=[
    {
      title:"Perfil",
    route:"/home/driver/profile",
    icon:"fa-solid fa-user"
    }
  ]

  public adminRoutes=[
  {
    title:"Estadisticas",
    route:"/home/admin",
    icon:"fa-solid fa-chart-simple"
  },
  {
    title:"Perfil",
    route:"/home/admin/profile",
    icon:"fa-solid fa-user"
  }
]

  onClick(){
    this.linkClicked.emit()
  }
  logout(){
    this.authService.logout()
  }
  ngOnInit(): void {
  }

}

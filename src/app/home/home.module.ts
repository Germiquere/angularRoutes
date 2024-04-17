import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { ShopPageComponent } from './pages/shop/shop-page.component';
import { DriverPageComponent } from './pages/driver/driver-page.component';
import { AdminPageComponent } from './pages/admin/admin-page.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarMobileComponent } from './components/sidebar-mobile/sidebar-mobile.component';


@NgModule({
  declarations: [
    HomeLayoutComponent,
    ShopPageComponent,
    DriverPageComponent,
    AdminPageComponent,
    HeaderComponent,
    SidebarMobileComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

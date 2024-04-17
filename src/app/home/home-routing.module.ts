import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { ShopPageComponent } from './pages/shop/shop-page.component';
import { DriverPageComponent } from './pages/driver/driver-page.component';
import { AdminPageComponent } from './pages/admin/admin-page.component';
import { ShopRolGuard } from './guards/ShopRol.guard';
import { AdminRolGuard } from './guards/AdminRol.guard';
import { DriverRolGuard } from './guards/DriverRol.guard';
import { OrdersPageComponent } from './pages/shop/pages/orders-page/orders-page.component';
import { UsersPageComponent } from './pages/admin/pages/users-page/users-page.component';
import { ProfilePageComponent } from './pages/profile/profile-page/profile-page.component';
import { NewProductComponent } from './pages/shop/pages/new-product/new-product.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: 'shop',
        canActivate:[ShopRolGuard],
        component: ShopPageComponent,
      },
      {
        path:"shop/profile",
        canActivate:[ShopRolGuard],
        component:ProfilePageComponent
      },
      {
        path:"shop/newProduct",
        canActivate:[ShopRolGuard],
        component:NewProductComponent
      },
      {
        path: 'driver',
        canActivate:[DriverRolGuard],
        component: DriverPageComponent,
      },
      {
        path: 'admin',
        canActivate:[AdminRolGuard],
        component: AdminPageComponent,
      },
      {
        path:"admin/profile",
        canActivate:[AdminRolGuard],
        component:ProfilePageComponent
      }
      // {
      //   path: '**',
      //   redirectTo: '',
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}

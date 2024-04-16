import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { ShopPageComponent } from './pages/shop/shop-page.component';
import { DriverPageComponent } from './pages/driver/driver-page.component';
import { AdminPageComponent } from './pages/admin/admin-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: 'shop',
        component: ShopPageComponent,
      },
      {
        path: 'driver',
        component: DriverPageComponent,
      },
      {
        path: 'admin',
        component: AdminPageComponent,
      },
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

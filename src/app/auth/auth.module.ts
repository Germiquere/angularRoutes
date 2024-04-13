import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './aut-routing.module';
import { AuthLayoutComponent } from './layout/layout.component';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AuthLayoutComponent, LoginPageComponent],
  imports: [CommonModule, AuthRoutingModule, SharedModule],
})
export class AuthModule {}

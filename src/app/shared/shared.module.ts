import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Error404PageComponent, ButtonComponent],
  exports: [Error404PageComponent, ButtonComponent],
})
export class SharedModule {}

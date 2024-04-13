import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Error404PageComponent, ButtonComponent, InputComponent],
  exports: [Error404PageComponent, ButtonComponent, InputComponent],
})
export class SharedModule {}

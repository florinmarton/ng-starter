import { NgModule } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import { NavbarComponent } from './navbar.component';


@NgModule({
  declarations: [NavbarComponent],
  imports: [
    MenubarModule
  ],
  exports: [NavbarComponent],
})
export class NavbarModule { }

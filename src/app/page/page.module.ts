import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ScrolltopComponent } from './scrolltop/scrolltop.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [NavbarComponent, FooterComponent, SidenavComponent, ScrolltopComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    SidenavComponent,
    ScrolltopComponent
  ]
})
export class PageModule { }

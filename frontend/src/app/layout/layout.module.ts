import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppHeaderComponent } from './header/header.component';

import { RouterModule } from '@angular/router';
import { AppFooterComponent } from './footer/footer.component';
import { AppLayoutComponent } from './layout.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    AppFooterComponent,
    AppHeaderComponent,
    AppLayoutComponent
  ],
  exports: [AppLayoutComponent]
})
export class AppLayoutModule { }

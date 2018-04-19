import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AppSharedModule } from '@app/shared';
import { PagesRoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent
  ],
  exports: [
    AboutComponent,
    ContactComponent,
    PagesRoutingModule,
    AppSharedModule
  ]
})
export class PagesModule { }

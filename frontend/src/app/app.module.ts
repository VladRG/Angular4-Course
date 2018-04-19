import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HelloService } from './hello-world/hello.service';


import { AboutComponent, ContactComponent } from '@app/static';
import { AppLayoutModule } from '@app/layout/layout.module';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
    pathMatch: 'full'
  },
  {
    path: 'contact',
    component: ContactComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: ContactComponent
  }];

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppLayoutModule,
    RouterModule.forRoot(routes)
  ],
  exports: [],
  providers: [
    HelloService,
    {
      provide: 'token',
      useValue: 'hello',
      multi: true
    }, {
      provide: 'token',
      useValue: 'world',
      multi: true
    }
  ],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

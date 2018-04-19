import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatFormFieldModule, MatCardModule, MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HelloService } from './hello-world/hello.service';


import { AboutComponent, ContactComponent } from '@app/static';
import { AppLayoutModule } from '@app/layout';
import { AuthService } from './auth.service';
import { AppLoginComponent } from '@app/login/login.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: AppLoginComponent
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
    ContactComponent,
    AppLoginComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppLayoutModule,
    RouterModule.forRoot(routes),

    // @angular/material
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  exports: [],
  providers: [
    HelloService,
    AuthService
  ],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

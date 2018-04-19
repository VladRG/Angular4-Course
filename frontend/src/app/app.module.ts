import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatButtonModule, MatFormFieldModule,
  MatCardModule, MatInputModule, MatTableModule, MatIconModule, MatPaginatorModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

import { AppLayoutModule, AppLayoutComponent } from '@app/layout';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from '@app/core';
import { AppCoreModule } from '@app/core/core.module';
import { UserModule, PagesModule, AuthModule } from '@app/features';
import { AppSharedModule } from '@app/shared';
import { AppRoutingModule } from '@app/routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // default
    BrowserModule,

    // shared
    AppLayoutModule,
    AppCoreModule,
    AppSharedModule,
    AppRoutingModule,

    // features
    UserModule,
    PagesModule,
    AuthModule,


  ],
  exports: [],
  providers: [
  ],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

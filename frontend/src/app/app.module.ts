import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { FormsModule } from '@angular/forms';
import { HelloService } from './hello-world/hello.service';
import { AppLayoutComponent } from './layout/layout.component';
import { AppHeaderComponent } from './layout/header/header.component';
import { AppFooterComponent } from './layout/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    AppLayoutComponent,
    AppHeaderComponent,
    AppFooterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
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

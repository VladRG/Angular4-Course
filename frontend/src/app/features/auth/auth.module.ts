import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { AppLoginComponent } from './login/login.component';
import { AppRegisterComponent } from './register/register.component';
import { AuthRoutingModule } from './router.module';
import { AppSharedModule } from '@app/shared';

@NgModule({
  declarations: [
    AppLoginComponent,
    AppRegisterComponent
  ],
  imports: [
    AuthRoutingModule,
    AppSharedModule
  ]
})
export class AuthModule {

}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLoginComponent } from './login/login.component';
import { AppRegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'login',
    component: AppLoginComponent
  },
  {
    path: 'register',
    component: AppRegisterComponent
  },
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule {

}

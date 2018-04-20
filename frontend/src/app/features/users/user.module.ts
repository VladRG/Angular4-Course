import { NgModule } from '@angular/core';
import { AppSharedModule } from '@app/shared';
import { UserRoutingModule } from './routing.module';
import { UsersComponent } from './users.component';
import { UsersResolver } from './users.resolver';

@NgModule({
  declarations: [
    UsersComponent
  ],
  providers: [
    UsersResolver
  ],
  imports: [
    UserRoutingModule,
    AppSharedModule
  ]
})
export class UserModule { }

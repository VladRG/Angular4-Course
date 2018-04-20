import { NgModule } from '@angular/core';
import { AppSharedModule } from '@app/shared';
import { UserRoutingModule } from './routing.module';
import { UsersComponent } from './users.component';
import { UsersResolver } from './users.resolver';
import { EditUserComponent } from '@app/features/users/edit/edit.component';

@NgModule({
  declarations: [
    UsersComponent,
    EditUserComponent
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

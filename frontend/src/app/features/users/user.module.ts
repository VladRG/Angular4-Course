import { NgModule } from '@angular/core';
import { AppSharedModule } from '@app/shared';
import { UserRoutingModule } from './routing.module';
import { UsersComponent } from './users.component';
import { UsersResolver } from './users.resolver';
import { EditUserComponent } from '@app/features/users/edit/edit.component';
import { UserFormComponent } from '@app/features/users/form/form.component';

@NgModule({
  declarations: [
    UsersComponent,
    EditUserComponent,
    UserFormComponent
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

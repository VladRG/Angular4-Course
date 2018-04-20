import { NgModule } from '@angular/core';
import { AppSharedModule } from '@app/shared';
import { UserRoutingModule } from './routing.module';
import { UsersComponent } from './users.component';
import { UsersResolver } from './users.resolver';
import { EditUserComponent } from './edit/edit.component';
import { UserFormComponent } from './form/form.component';
import { UserTableComponent } from './table/table.component';
import { NewUserComponent } from './new/new.component';

@NgModule({
  declarations: [
    UsersComponent,
    EditUserComponent,
    UserFormComponent,
    UserTableComponent,
    NewUserComponent
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

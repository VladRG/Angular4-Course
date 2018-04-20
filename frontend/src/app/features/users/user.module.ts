import { NgModule } from '@angular/core';
import { AppSharedModule } from '@app/shared';
import { UserRoutingModule } from './routing.module';
import { UsersComponent } from './users.component';
import { UsersResolver } from './users.resolver';
import { EditUserComponent } from './edit/edit.component';
import { UserFormComponent } from './form/form.component';
import { UserTableComponent } from './table/table.component';

@NgModule({
  declarations: [
    UsersComponent,
    EditUserComponent,
    UserFormComponent,
    UserTableComponent
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

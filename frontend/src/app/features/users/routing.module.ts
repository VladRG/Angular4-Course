import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@app/core';
import { UsersComponent } from './users.component';
import { EditUserComponent } from './edit/edit.component';
import { UsersResolver } from './users.resolver';
import { UserTableComponent } from './table/table.component';
import { NewUserComponent } from './new/new.component';

const routes: Routes = [
  {
    path: 'user',
    component: UsersComponent,
    canActivate: [AuthGuard],
    resolve: {
      users: UsersResolver
    },
    data: {
      pageName: 'Users'
    },
    children: [
      {
        path: '',
        component: UserTableComponent
      },
      {
        path: 'create',
        component: NewUserComponent
      },
      {
        path: ':id',
        component: EditUserComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }

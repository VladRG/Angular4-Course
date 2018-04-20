import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@app/core';
import { UsersComponent } from './users.component';
import { UsersResolver } from './users.resolver';

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
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }

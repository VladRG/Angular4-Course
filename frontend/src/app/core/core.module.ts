import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services';
import { AuthGuard } from './guards';


@NgModule({
  providers: [
    AuthService,
    AuthGuard
  ],
  imports: [

  ],
  declarations: []
})
export class AppCoreModule { }

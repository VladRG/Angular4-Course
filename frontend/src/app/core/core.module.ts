import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services';
import { AuthGuard } from './guards';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor, ApiUrlInterceptor } from './interceptors';
import { UserService } from './services';
import { CrudService } from '@app/core/services/crud.service';

@NgModule({
  providers: [
    // Services
    AuthService,
    UserService,
    CrudService,
    AuthGuard,

    // Interceptors
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiUrlInterceptor,
      multi: true
    }

    // Directives
  ],
  imports: [

  ],
  exports: [

  ],
  declarations: [

  ]
})
export class AppCoreModule { }

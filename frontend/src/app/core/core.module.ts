import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services';
import { AuthGuard } from './guards';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor, ApiUrlInterceptor } from './interceptors';

@NgModule({
  providers: [
    AuthService,
    AuthGuard,
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
  ],
  imports: [
  ],
  declarations: []
})
export class AppCoreModule { }

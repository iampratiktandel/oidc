import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './component/master/master.component';
import { AuthCallbackComponent } from './component/auth-callback/auth-callback.component';
import { AuthService } from './service/auth/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './service/interceptor/auth.interceptor';
import { AuthGuard } from './service/guard/auth.guard';

@NgModule({
  declarations: [MasterComponent, AuthCallbackComponent],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }

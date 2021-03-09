import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './component/master/master.component';
import { AuthCallbackComponent } from './component/auth-callback/auth-callback.component';

@NgModule({
  declarations: [MasterComponent, AuthCallbackComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }

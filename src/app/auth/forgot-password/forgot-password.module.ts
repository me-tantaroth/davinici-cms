import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared.module';
import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';

import { ForgotPasswordComponent } from './forgot-password.component';

@NgModule({
  declarations: [ForgotPasswordComponent],
  imports: [CommonModule, SharedModule, ForgotPasswordRoutingModule],
})
export class ForgotPasswordModule {}

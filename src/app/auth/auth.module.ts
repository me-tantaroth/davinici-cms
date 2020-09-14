import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule as SignInSharedModule } from './sign-in/shared.module';
import { SharedModule as ForgotPasswordSharedModule } from './forgot-password/shared.module';
import { AuthRoutingModule } from './auth-routing.module';

import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    SignInSharedModule,
    ForgotPasswordSharedModule,
    AuthRoutingModule,
  ],
})
export class AuthModule {}

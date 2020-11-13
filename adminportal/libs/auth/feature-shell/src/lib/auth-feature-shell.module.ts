import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthFeatureLoginModule, LoginPageComponent } from '@hutch/auth/feature-login';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: LoginPageComponent,
      }
    ]),

    AuthFeatureLoginModule,
  ],
})
export class AuthFeatureShellModule {}

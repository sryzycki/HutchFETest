import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JwtModule } from '@auth0/angular-jwt';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ACCESS_TOKEN_KEY } from '@hutch/auth/feature-login';

import { UnauthorisedInterceptor } from './unauthorised.interceptor';

export function tokenGetter() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

@NgModule({
  imports: [
    CommonModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: [],
        disallowedRoutes: [],
      },
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UnauthorisedInterceptor,
      multi: true,
    }
  ],
})
export class AuthUtilJwtModule {}

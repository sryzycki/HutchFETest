import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';

import { AuthService } from '@hutch/auth/feature-login';

@Injectable()
export class UnauthorisedInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
  ) {}

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap(
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        () => {},
        (err: any) => {
          //
          // TODO(Samuel): Loads can be enhanced here...
          // - refresh JWT token
          // - replay the failed request with the new token
          // - after refresh failure, allow the user to login
          // - after login, replay the failed request so that they don't need to re-do whatever they had done
          if (err instanceof HttpErrorResponse) {
            if (err.status !== 401) {
              return;
            }

            this.authService.logout();
          }
        }),
    );
  }
}

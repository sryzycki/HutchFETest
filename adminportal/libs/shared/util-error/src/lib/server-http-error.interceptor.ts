import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ServerHttpErrorInterceptor implements HttpInterceptor {
  constructor(
    private snackBar: MatSnackBar,
  ) {}

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.error instanceof ErrorEvent) {
          // Client side error.
          // Handle else where in a more specific interceptor.
        } else {
          // Server side error.
          this.showSnackBar(`Ooops, there has been server error (code: ${error.status}, message: ${error.statusText}).`);
        }

        // Re-throw in case anyone else is interested.
        return throwError(error);
      }),
    );
  }

  public showSnackBar(message: string): void {
    this.snackBar.open(message, 'Dismiss', {
      duration: 5000,
      horizontalPosition: 'end',
    });
  }
}

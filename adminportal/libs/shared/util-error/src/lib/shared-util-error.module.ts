import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { GlobalErrorHandlerService } from './global-error-handler.service';
import { ServerHttpErrorInterceptor } from './server-http-error.interceptor';

@NgModule({
  imports: [
    CommonModule,
    MatSnackBarModule,
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerHttpErrorInterceptor,
      multi: true,
    }
  ],
})
export class SharedUtilErrorModule {}

import { ErrorHandler, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {
  constructor(
    private snackBar: MatSnackBar,
  ) {}

  public handleError(error: any): void {
    console.error(error);
    this.showSnackBar();
  }

  public showSnackBar(): void {
    this.snackBar.open('Ooops! Something went wrong...', 'Dismiss', {
      duration: 2000,
      horizontalPosition: 'end',
    });
  }
}

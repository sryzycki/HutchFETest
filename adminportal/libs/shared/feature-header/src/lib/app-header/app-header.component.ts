import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AuthService } from '@hutch/auth/feature-login';

@Component({
  selector: 'hutch-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppHeaderComponent {
  public isLoggedIn$ = this.authService.isLoggedIn$;

  constructor(
    private authService: AuthService,
  ) { }

  public logout(): void {
    this.authService.logout();
  }
}

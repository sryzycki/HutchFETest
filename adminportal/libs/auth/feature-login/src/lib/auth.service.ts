import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export const ACCESS_TOKEN_KEY = 'hutch_access_token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggedIn$: BehaviorSubject<boolean>;

  constructor(
    private router: Router,
  ) {
    const token = localStorage.getItem(ACCESS_TOKEN_KEY);
    this.isLoggedIn$ = new BehaviorSubject(!!token);
  }

  public login(): void {
    const hardcodedToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`;
    localStorage.setItem(ACCESS_TOKEN_KEY, hardcodedToken);

    this.router.navigate(['']);
    this.isLoggedIn$.next(true);
  }

  public logout(): void {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    this.router.navigate(['auth']);
    this.isLoggedIn$.next(false);
  }
}

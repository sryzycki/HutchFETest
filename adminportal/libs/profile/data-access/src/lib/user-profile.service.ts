import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UserProfileEntity } from '@hutch/profile/domain';

@Injectable({
  providedIn: 'any'
})
export class UserProfileService {
  public static BASE_URL = '/api';

  public static ENDPOINT_URL = '/user-profiles';

  constructor(
    private httpClient: HttpClient,
  ) { }

  public getAll(): Observable<UserProfileEntity[]> {
    const url = UserProfileService.BASE_URL + UserProfileService.ENDPOINT_URL;

    return this.httpClient.get<UserProfileEntity[]>(url)
      .pipe(
        delay(750),
      );
  }
}

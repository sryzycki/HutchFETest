import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { UserProfileFacade } from '@hutch/profile/data-access';
import { ProfileSearchFormValue } from '@hutch/profile/ui-search';

@Component({
  selector: 'hutch-search-user-profile',
  templateUrl: './search-user-profile.component.html',
  styleUrls: ['./search-user-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchUserProfileComponent implements OnInit {
  public errorUserProfile$ = this.userProfileFacade.error$;

  public loadedUserProfile$ = this.userProfileFacade.loaded$;

  public allUserProfile$ = this.userProfileFacade.allUserProfile$;

  constructor(
    private userProfileFacade: UserProfileFacade,
  ) { }

  public ngOnInit(): void {
    this.userProfileFacade.getAll();
  }

  public handleSearchValues(searchValues: ProfileSearchFormValue): void {
    console.log('Searching for...', searchValues);
  }
}

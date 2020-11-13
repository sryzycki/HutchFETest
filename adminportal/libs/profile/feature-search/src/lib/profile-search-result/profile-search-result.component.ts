import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { UserProfileEntity } from '@hutch/profile/domain';

@Component({
  selector: 'hutch-profile-search-result',
  templateUrl: './profile-search-result.component.html',
  styleUrls: ['./profile-search-result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileSearchResultComponent implements OnInit {
  @Input() public profile!: UserProfileEntity;

  constructor() { }

  ngOnInit(): void {
  }

}

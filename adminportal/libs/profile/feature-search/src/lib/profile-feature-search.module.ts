import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedUiSpinnerModule } from '@hutch/shared/ui-spinner';
import { SharedUiErrorModule } from '@hutch/shared/ui-error';
import { ProfileDataAccessModule } from '@hutch/profile/data-access';
import { ProfileUiSearchModule } from '@hutch/profile/ui-search';

import { SearchUserProfileComponent } from './search-user-profile/search-user-profile.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { ProfileSearchResultComponent } from './profile-search-result/profile-search-result.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedUiSpinnerModule,
    SharedUiErrorModule,
    ProfileDataAccessModule,
    ProfileUiSearchModule,
    MatCardModule,
    MatIconModule,
    RouterModule
  ],
  declarations: [SearchPageComponent, SearchUserProfileComponent, ProfileSearchResultComponent],
  exports: [SearchPageComponent],
})
export class ProfileFeatureSearchModule {}

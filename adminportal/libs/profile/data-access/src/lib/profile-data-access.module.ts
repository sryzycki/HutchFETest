import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromUserProfile from './+state/user-profile.reducer';
import { UserProfileEffects } from './+state/user-profile.effects';
import { UserProfileFacade } from './+state/user-profile.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromUserProfile.USERPROFILE_FEATURE_KEY,
      fromUserProfile.reducer
    ),
    EffectsModule.forFeature([UserProfileEffects]),
  ],
  providers: [UserProfileFacade],
})
export class ProfileDataAccessModule {}

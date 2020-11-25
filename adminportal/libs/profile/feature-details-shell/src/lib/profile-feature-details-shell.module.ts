import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProfileFeatureDetailsModule, ProfilePageComponent } from '@hutch/profile/feature-details';
import { PlayerSummaryComponent } from '@hutch/profile/ui-player';
import { FuelSummaryComponent } from '@hutch/fuel/ui-summary';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: ':profileId',
        component: ProfilePageComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'summary',
          },
          {
            path: 'summary',
            component: PlayerSummaryComponent
          },
          {
            path: 'fuel',
            component: FuelSummaryComponent,
          },
        ]
      }
    ]),

    ProfileFeatureDetailsModule,
  ],
})
export class ProfileFeatureDetailsShellModule {}

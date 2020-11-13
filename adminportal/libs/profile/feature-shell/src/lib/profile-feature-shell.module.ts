import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProfileFeatureSearchModule, SearchPageComponent } from '@hutch/profile/feature-search';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: SearchPageComponent,
      },
    ]),

    ProfileFeatureSearchModule,
  ],
})
export class ProfileFeatureShellModule {}

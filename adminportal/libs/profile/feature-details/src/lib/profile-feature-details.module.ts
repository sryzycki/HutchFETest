import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';

import { SharedUiLayoutModule } from '@hutch/shared/ui-layout';

import { ProfilePageComponent } from './profile-page/profile-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatTabsModule,
    SharedUiLayoutModule,
  ],
  declarations: [ProfilePageComponent],
})
export class ProfileFeatureDetailsModule {}

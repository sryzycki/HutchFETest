import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { SharedFeatureVersioningModule } from '@hutch/shared/feature-versioning';

import { AppHeaderComponent } from './app-header/app-header.component';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatButtonModule,
    SharedFeatureVersioningModule,
  ],
  declarations: [AppHeaderComponent],
  exports: [AppHeaderComponent],
})
export class SharedFeatureHeaderModule {}

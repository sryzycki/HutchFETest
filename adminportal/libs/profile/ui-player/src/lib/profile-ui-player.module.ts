import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import { PlayerSummaryComponent } from './player-summary/player-summary.component';

@NgModule({
  imports: [CommonModule, MatCardModule, MatDividerModule],
  declarations: [PlayerSummaryComponent],
})
export class ProfileUiPlayerModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FetchFailureMessageComponent } from './fetch-failure-message/fetch-failure-message.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [CommonModule, MatIconModule],
  declarations: [FetchFailureMessageComponent],
  exports: [FetchFailureMessageComponent],
})
export class SharedUiErrorModule {}

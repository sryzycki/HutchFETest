import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutStackedWithTopNavComponent } from './layout-stacked-with-top-nav/layout-stacked-with-top-nav.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LayoutStackedWithTopNavComponent],
  exports: [LayoutStackedWithTopNavComponent],
})
export class SharedUiLayoutModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldDefaultOptions,
  MatFormFieldModule
} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

import { SwitchAppVersionComponent } from './switch-app-version/switch-app-version.component';
import { SwitchDataVersionComponent } from './switch-data-version/switch-data-version.component';

const matFormFieldDefaultOptions: MatFormFieldDefaultOptions = {
  appearance: 'outline',
}

@NgModule({
  imports: [CommonModule, MatFormFieldModule, MatSelectModule, ReactiveFormsModule],
  declarations: [SwitchAppVersionComponent, SwitchDataVersionComponent],
  exports: [SwitchAppVersionComponent, SwitchDataVersionComponent],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: matFormFieldDefaultOptions,
    }
  ],
})
export class SharedFeatureVersioningModule {}

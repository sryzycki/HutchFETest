import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuelSummaryComponent } from './fuel-summary/fuel-summary.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { EditableModule } from '@ngneat/edit-in-place';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [CommonModule, MatDividerModule, MatCardModule, EditableModule, ReactiveFormsModule, MatIconModule, MatButtonModule, MatInputModule],
  declarations: [FuelSummaryComponent],
})
export class FuelUiSummaryModule {}

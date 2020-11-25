import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'hutch-fuel-summary',
  templateUrl: './fuel-summary.component.html',
  styleUrls: ['./fuel-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FuelSummaryComponent {
  now = new Date('2020-09-07T16:59:41.434Z');
}

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'hutch-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpinnerComponent {}

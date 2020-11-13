import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';

import { VersioningService } from '../versioning.service';

@Component({
  selector: 'hutch-switch-data-version',
  templateUrl: './switch-data-version.component.html',
  styleUrls: ['./switch-data-version.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwitchDataVersionComponent implements OnInit {
  public versionControl = new FormControl();

  constructor(
    private versioningService: VersioningService,
  ) { }

  ngOnInit(): void {
  }

}

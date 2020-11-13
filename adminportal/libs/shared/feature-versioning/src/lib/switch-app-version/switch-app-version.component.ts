import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';

import { VersioningService } from '../versioning.service';

@Component({
  selector: 'hutch-switch-app-version',
  templateUrl: './switch-app-version.component.html',
  styleUrls: ['./switch-app-version.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwitchAppVersionComponent implements OnInit {
  public versionControl = new FormControl();

  constructor(
    private versioningService: VersioningService,
  ) { }

  ngOnInit(): void {
  }

}

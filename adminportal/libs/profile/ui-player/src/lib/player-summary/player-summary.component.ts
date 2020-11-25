import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'hutch-player-summary',
  templateUrl: './player-summary.component.html',
  styleUrls: ['./player-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerSummaryComponent implements OnInit {
  now = new Date();

  messages = [
    {
      from: 'Samuel',
      subject: 'This is a subject',
      content: 'This is a content...'
    },
    {
      from: 'Samuel',
      subject: 'This is a subject',
      content: 'This is a content...'
    },
    {
      from: 'Samuel',
      subject: 'This is a subject',
      content: 'This is a content...'
    },

  ];
  constructor() { }

  ngOnInit(): void {
  }

}

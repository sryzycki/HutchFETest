import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'hutch-fetch-failure-message',
  templateUrl: './fetch-failure-message.component.html',
  styleUrls: ['./fetch-failure-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FetchFailureMessageComponent {
  @Input() public message = `Ooops, we weren't able to get the data...`;

  constructor(
    private iconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    const iconUrl: SafeResourceUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('assets/undraw_server_down_s4lk.svg');
    this.iconRegistry.addSvgIconInNamespace('hutch', 'server-down', iconUrl);
  }
}

import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

export enum UserProfilePredicate {
  Name = 'Name',
  HutchId = 'HutchId',
  FacebookId = 'FacebookId',
}

export interface ProfileSearchFormValue {
  searchTerm: string,
  searchFilter: UserProfilePredicate,
}

@Component({
  selector: 'hutch-profile-search-form',
  templateUrl: './profile-search-form.component.html',
  styleUrls: ['./profile-search-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileSearchFormComponent implements OnDestroy {
  public form: FormGroup;

  public userProfilePredicate = UserProfilePredicate;

  @Output() public searchValues = new EventEmitter<ProfileSearchFormValue>();

  private ngOnDestroy$ = new Subject();

  constructor(
    private fb: FormBuilder,
  ) {
    this.form = this.getForm();

    this.form.valueChanges.pipe(
      takeUntil(this.ngOnDestroy$),
      debounceTime(300),
    ).subscribe(next => this.emitSearchValues(next));
  }

  public ngOnDestroy() {
    this.ngOnDestroy$.next();
    this.ngOnDestroy$.complete();
  }

  private getForm(config: Partial<ProfileSearchFormValue> = {}): FormGroup {
    const controlsConfig: Record<keyof ProfileSearchFormValue, unknown> = {
      searchTerm: config.searchTerm,
      searchFilter: config.searchFilter,
    };

    return this.fb.group(controlsConfig);
  }

  private emitSearchValues(next: ProfileSearchFormValue): void {
    this.searchValues.emit(next);
  }
}

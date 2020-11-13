import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';


@Component({
  selector: 'hutch-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent {
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
  ) {
    this.form = this.fb.group({
      userName: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  public onSubmit(form: FormGroup) {
    if (form.valid) {
      this.authService.login();
    }
  }
}

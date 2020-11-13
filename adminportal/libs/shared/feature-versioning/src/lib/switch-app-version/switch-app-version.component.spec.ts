import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchAppVersionComponent } from './switch-app-version.component';

describe('SwitchAppVersionComponent', () => {
  let component: SwitchAppVersionComponent;
  let fixture: ComponentFixture<SwitchAppVersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchAppVersionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchAppVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchDataVersionComponent } from './switch-data-version.component';

describe('SwitchDataVersionComponent', () => {
  let component: SwitchDataVersionComponent;
  let fixture: ComponentFixture<SwitchDataVersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchDataVersionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchDataVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

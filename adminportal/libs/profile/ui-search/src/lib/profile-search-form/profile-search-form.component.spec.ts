import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSearchFormComponent } from './profile-search-form.component';

describe('ProfileSearchFormComponent', () => {
  let component: ProfileSearchFormComponent;
  let fixture: ComponentFixture<ProfileSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileSearchFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

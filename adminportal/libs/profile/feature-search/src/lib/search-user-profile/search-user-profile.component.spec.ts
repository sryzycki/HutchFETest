import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchUserProfileComponent } from './search-user-profile.component';

describe('SearchUserProfileComponent', () => {
  let component: SearchUserProfileComponent;
  let fixture: ComponentFixture<SearchUserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchUserProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

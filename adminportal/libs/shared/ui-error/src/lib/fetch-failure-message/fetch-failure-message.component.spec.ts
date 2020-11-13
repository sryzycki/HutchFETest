import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchFailureMessageComponent } from './fetch-failure-message.component';

describe('FetchFailureMessageComponent', () => {
  let component: FetchFailureMessageComponent;
  let fixture: ComponentFixture<FetchFailureMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchFailureMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchFailureMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

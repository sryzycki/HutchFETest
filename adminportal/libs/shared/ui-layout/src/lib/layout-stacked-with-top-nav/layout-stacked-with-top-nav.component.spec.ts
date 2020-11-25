import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutStackedWithTopNavComponent } from './layout-stacked-with-top-nav.component';

describe('LayoutStackedWithTopNavComponent', () => {
  let component: LayoutStackedWithTopNavComponent;
  let fixture: ComponentFixture<LayoutStackedWithTopNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutStackedWithTopNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutStackedWithTopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

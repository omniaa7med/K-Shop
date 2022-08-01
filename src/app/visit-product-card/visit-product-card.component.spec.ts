import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitProductCardComponent } from './visit-product-card.component';

describe('VisitProductCardComponent', () => {
  let component: VisitProductCardComponent;
  let fixture: ComponentFixture<VisitProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitProductCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

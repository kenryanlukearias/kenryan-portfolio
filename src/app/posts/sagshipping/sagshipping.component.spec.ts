import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SagshippingComponent } from './sagshipping.component';

describe('SagshippingComponent', () => {
  let component: SagshippingComponent;
  let fixture: ComponentFixture<SagshippingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SagshippingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SagshippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

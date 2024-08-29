import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECommercialComponent } from './e-commercial.component';

describe('ECommercialComponent', () => {
  let component: ECommercialComponent;
  let fixture: ComponentFixture<ECommercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ECommercialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ECommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

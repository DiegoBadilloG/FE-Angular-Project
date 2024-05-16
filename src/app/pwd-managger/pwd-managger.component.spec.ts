import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwdManaggerComponent } from './pwd-managger.component';

describe('PwdManaggerComponent', () => {
  let component: PwdManaggerComponent;
  let fixture: ComponentFixture<PwdManaggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PwdManaggerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PwdManaggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

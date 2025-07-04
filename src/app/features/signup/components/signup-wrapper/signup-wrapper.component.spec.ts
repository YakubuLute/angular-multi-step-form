import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupWrapperComponent } from './signup-wrapper.component';

describe('SignupWrapperComponent', () => {
  let component: SignupWrapperComponent;
  let fixture: ComponentFixture<SignupWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

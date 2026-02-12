import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { DriverBaselineComponent } from './driver-baseline';

describe('DriverBaselineComponent', () => {
  let component: DriverBaselineComponent;
  let fixture: ComponentFixture<DriverBaselineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DriverBaselineComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(DriverBaselineComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

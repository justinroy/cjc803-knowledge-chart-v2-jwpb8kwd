import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { RouteBaselineComponent } from './route-baseline';

describe('RouteBaselineComponent', () => {
  let component: RouteBaselineComponent;
  let fixture: ComponentFixture<RouteBaselineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteBaselineComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(RouteBaselineComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

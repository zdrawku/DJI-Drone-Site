import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxGridModule } from 'igniteui-angular';
import { DroneComparisonViewComponent } from './drone-comparison-view.component';

describe('DroneComparisonViewComponent', () => {
  let component: DroneComparisonViewComponent;
  let fixture: ComponentFixture<DroneComparisonViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DroneComparisonViewComponent],
      imports: [NoopAnimationsModule, FormsModule, ReactiveFormsModule, HttpClientTestingModule, IgxGridModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DroneComparisonViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

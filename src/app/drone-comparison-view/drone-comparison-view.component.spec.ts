import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IGX_GRID_DIRECTIVES } from 'igniteui-angular';
import { DroneComparisonViewComponent } from './drone-comparison-view.component';

describe('DroneComparisonViewComponent', () => {
  let component: DroneComparisonViewComponent;
  let fixture: ComponentFixture<DroneComparisonViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DroneComparisonViewComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, HttpClientTestingModule, IGX_GRID_DIRECTIVES]
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

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { IgxNavbarModule, IgxIconModule, IgxButtonModule } from 'igniteui-angular';
import { LandingPageViewComponent } from './landing-page-view.component';

describe('LandingPageViewComponent', () => {
  let component: LandingPageViewComponent;
  let fixture: ComponentFixture<LandingPageViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingPageViewComponent],
      imports: [NoopAnimationsModule, FormsModule, ReactiveFormsModule, RouterTestingModule, IgxNavbarModule, IgxIconModule, IgxButtonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxTabsModule } from 'igniteui-angular';
import { DroneSelectorViewComponent } from './drone-selector-view.component';

describe('DroneSelectorViewComponent', () => {
  let component: DroneSelectorViewComponent;
  let fixture: ComponentFixture<DroneSelectorViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DroneSelectorViewComponent],
      imports: [NoopAnimationsModule, FormsModule, ReactiveFormsModule, IgxTabsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DroneSelectorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IGX_TABS_DIRECTIVES } from 'igniteui-angular';
import { DroneSelectorViewComponent } from './drone-selector-view.component';

describe('DroneSelectorViewComponent', () => {
  let component: DroneSelectorViewComponent;
  let fixture: ComponentFixture<DroneSelectorViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DroneSelectorViewComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IGX_TABS_DIRECTIVES]
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

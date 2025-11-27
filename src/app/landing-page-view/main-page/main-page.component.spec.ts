import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxButtonModule, IgxCardModule, IgxAvatarModule, IgxIconModule, IgxAccordionModule, IgxExpansionPanelModule } from 'igniteui-angular';
import { MainPageComponent } from './main-page.component';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainPageComponent],
      imports: [NoopAnimationsModule, FormsModule, ReactiveFormsModule, IgxButtonModule, IgxCardModule, IgxAvatarModule, IgxIconModule, IgxAccordionModule, IgxExpansionPanelModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LandingPageViewRoutingModule } from './landing-page-view-routing.module';
import { LandingPageViewComponent } from './landing-page-view.component';
import { MainPageComponent } from './main-page/main-page.component';
import { IgxButtonModule, IgxCardModule, IgxAvatarModule, IgxIconModule, IgxAccordionModule, IgxExpansionPanelModule, IgxInputGroupModule, IgxCheckboxModule, IgxNavbarModule } from 'igniteui-angular';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [
    LandingPageViewComponent,
    MainPageComponent,
    RegisterPageComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    LandingPageViewRoutingModule,
    IgxButtonModule,
    IgxCardModule,
    IgxAvatarModule,
    IgxIconModule,
    IgxAccordionModule,
    IgxExpansionPanelModule,
    FormsModule,
    IgxInputGroupModule,
    IgxCheckboxModule,
    IgxNavbarModule
  ]
})
export class LandingPageViewModule { }

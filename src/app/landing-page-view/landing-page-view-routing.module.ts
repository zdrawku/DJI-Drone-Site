import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageViewComponent } from './landing-page-view.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageViewComponent, children: [
      { path: '', redirectTo: 'main-page', pathMatch: 'full' },
      { path: 'main-page', component: MainPageComponent, data: { text: 'Main-Page' } },
      { path: 'register-page', component: RegisterPageComponent, data: { text: 'Register-Page' } },
      { path: 'login-page', component: LoginPageComponent, data: { text: 'Login-Page' } },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageViewRoutingModule { }

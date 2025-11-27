import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { DroneSelectorViewComponent } from './drone-selector-view/drone-selector-view.component';
import { DroneComparisonViewComponent } from './drone-comparison-view/drone-comparison-view.component';

export const routes: Routes = [
  { path: '', redirectTo: 'landing-page-view', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'landing-page-view', loadChildren: () => import('./landing-page-view/landing-page-view.module').then(m => m.LandingPageViewModule) },
  { path: 'drone-selector-view', component: DroneSelectorViewComponent, data: { text: 'Drone-Selector-View' } },
  { path: 'drone-comparison-view', component: DroneComparisonViewComponent, data: { text: 'Drone-Comparison-View' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule { }

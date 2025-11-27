import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DroneSelectorViewComponent } from './drone-selector-view/drone-selector-view.component';
import { IgxTabsModule, IgxGridModule } from 'igniteui-angular';
import { DroneComparisonViewComponent } from './drone-comparison-view/drone-comparison-view.component';

@NgModule({
  declarations: [
    AppComponent,
    DroneSelectorViewComponent,
    DroneComparisonViewComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxTabsModule,
    FormsModule,
    IgxGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

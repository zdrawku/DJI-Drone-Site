import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IGX_NAVBAR_DIRECTIVES, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
  selector: 'app-landing-page-view',
  imports: [IGX_NAVBAR_DIRECTIVES, IgxIconButtonDirective, IgxIconComponent, IgxButtonDirective, RouterOutlet, RouterLink],
  templateUrl: './landing-page-view.component.html',
  styleUrls: ['./landing-page-view.component.scss']
})
export class LandingPageViewComponent {}

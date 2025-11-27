import { Component } from '@angular/core';
import { IGX_ACCORDION_DIRECTIVES, IGX_CARD_DIRECTIVES, IGX_EXPANSION_PANEL_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
  selector: 'app-main-page',
  imports: [IGX_EXPANSION_PANEL_DIRECTIVES, IGX_ACCORDION_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxButtonDirective, IgxAvatarComponent, IgxIconComponent],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {}

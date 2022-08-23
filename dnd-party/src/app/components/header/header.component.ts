import { Component, ViewChild } from '@angular/core';
import { TuiHostedDropdownComponent } from '@taiga-ui/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @ViewChild(TuiHostedDropdownComponent)
  component?: TuiHostedDropdownComponent;

  readonly menuItems = [
    { name: 'Home', route: 'dashboard'},
    { name: 'Initiative', route: 'initiative-tracker' },
    { name: 'Party', route: 'party-dashboard' },
    { name: 'Character', route: 'initiative-tracker' },
  ];


  constructor() {}

}

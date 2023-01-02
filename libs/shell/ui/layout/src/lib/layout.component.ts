import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fnr-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {

  isCollapsed = false;
  isActiveMap = {
    home: false,
    genre: {} as any,
    library: {} as any,
  };

  constructor() {
    switch (location.pathname) {
      case '/home': this.isActiveMap['home'] = true; break;
      case '/genre': this.isActiveMap['genre'][location.hash.substring(1)] = true; break;
      case '/library': this.isActiveMap['library'][location.hash.substring(1)] = true; break;
      default: break;
    }
  }
}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconsProviderModule } from '@ktteam/shared/ui';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    IconsProviderModule,
    RouterModule,
  ],
  declarations: [
    LayoutComponent
  ],
  exports: [
    LayoutComponent
  ],
})
export class ShellUiLayoutModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ShellComponent } from './shell.component';
import { ShellUiLayoutModule } from '@ktteam/shell/ui/layout';

const routes: Route[] = [
  { path: '', component: ShellComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ShellUiLayoutModule
  ],
  declarations: [
    ShellComponent
  ],
})
export class ShellFeatureModule {
}

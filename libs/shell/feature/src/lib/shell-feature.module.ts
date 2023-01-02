import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ShellUiLayoutModule } from '@ktteam/shell/ui/layout';
import { ShellComponent } from './shell.component';

const routes: Route[] = [
  {
    path: '', component: ShellComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadComponent: () => import('@ktteam/pages/home').then(c => c.PagesHomeComponent) },
      { path: 'genre', loadComponent: () => import('@ktteam/pages/genre').then(c => c.PagesGenreComponent) },
      { path: 'library', loadComponent: () => import('@ktteam/pages/library').then(c => c.PagesLibraryComponent) },
    ]
  },
  // { path: '**', redirectTo: '', pathMatch: 'full'}
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

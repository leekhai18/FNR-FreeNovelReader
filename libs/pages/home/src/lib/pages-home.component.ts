import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fnr-home-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pages-home.component.html',
  styleUrls: ['./pages-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PagesHomeComponent {}

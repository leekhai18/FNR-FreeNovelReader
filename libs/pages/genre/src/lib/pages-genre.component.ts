import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fnr-genre-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pages-genre.component.html',
  styleUrls: ['./pages-genre.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PagesGenreComponent {}

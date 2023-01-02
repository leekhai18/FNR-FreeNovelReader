import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fnr-library-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pages-library.component.html',
  styleUrls: ['./pages-library.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PagesLibraryComponent {}

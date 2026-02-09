import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-assignment-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './assignment-root.html',
  styleUrl: './assignment-root.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssignmentRoot {}

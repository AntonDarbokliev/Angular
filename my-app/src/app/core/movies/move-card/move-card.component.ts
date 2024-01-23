import { Component, Input } from '@angular/core';
import { MovieData } from '../../../types/movieTypes';

@Component({
  selector: 'movie-card',
  standalone: true,
  imports: [],
  templateUrl: './move-card.component.html',
  styleUrl: './move-card.component.scss'
})
export class MoveCardComponent {
@Input() movie!: MovieData;
}

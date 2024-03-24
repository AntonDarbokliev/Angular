import { Component, Input } from '@angular/core';
import { MovieData } from '../../types/movieTypes';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {
  @Input({ required: true }) movie!: MovieData;

  constructor() {}

}

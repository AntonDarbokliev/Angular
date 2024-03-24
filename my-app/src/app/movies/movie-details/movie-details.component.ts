import { Component, Input } from '@angular/core';
import { MovieData } from '../../types/movieTypes';
import { MoviesService } from '../movies-service.service';

@Component({
  selector: 'app-movie-details',
  standalone: false,
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss'
})
export class MovieDetailsComponent {
// @Input({required: true}) movie!: MovieData
  // private movie: MovieData

  constructor(private movieService : MoviesService) {}

  // ngOnInit() {
    
  //   this.movieService.getMovies().subscribe(
  //     (data: MovieData[]) => {
  //       this.movie = data        
  //     }
  //   )
  // }
}

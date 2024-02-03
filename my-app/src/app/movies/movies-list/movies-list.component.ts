import { Component } from '@angular/core';
import { MoviesService } from '../movies-service.service';
import { MovieData } from '../../types/movieTypes'


@Component({
  selector: 'movies-list',
  providers: [],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss',
})
export class MoviesListComponent {

   movies: MovieData[] = []

  constructor(private movieService : MoviesService) {}

  ngOnInit() {
    console.log('test');
    
    this.movieService.getMovies().subscribe(
      (data: MovieData[]) => {
        this.movies = data        
      }
    )
  }

}

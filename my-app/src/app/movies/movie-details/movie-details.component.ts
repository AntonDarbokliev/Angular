import { Component } from '@angular/core';
import { MovieData } from '../../types/movieTypes';
import { MoviesService } from '../movies-service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movie-details',
  standalone: false,
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss'
})
export class MovieDetailsComponent {

  id = 0;
  movie: MovieData = {} as MovieData;

  constructor(private movieService : MoviesService,private route: ActivatedRoute) {}

  ngOnInit() {
    
    this.route.params.subscribe(params => {
       this.id = params['id'];
    });

    this.movieService.getSingleMovie(this.id).subscribe(
      (data: MovieData) => {
        this.movie = data        
      }
    )
  }
}

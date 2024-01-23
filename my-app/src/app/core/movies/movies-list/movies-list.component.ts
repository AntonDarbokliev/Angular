import { Component } from '@angular/core';
import { MoviesService } from '../movies-service.service';
import { MovieData } from '../../../types/movieTypes'
import { CommonModule } from '@angular/common'
import { MoveCardComponent } from '../move-card/move-card.component';

// import { OnInit } from '@angular/core'

@Component({
  selector: 'movies-list',
  standalone: true,
  imports: [CommonModule,MoveCardComponent],
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

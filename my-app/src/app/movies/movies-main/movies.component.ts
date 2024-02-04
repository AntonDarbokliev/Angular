import { Component } from '@angular/core';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent {
  
}

import { MoviesModule } from '../movies.module';
import { MoviesSearchComponent } from '../movies-search/movies-search.component';
import { MoviesListComponent } from '../movies-list/movies-list.component';
import { MovieCardComponent } from '../movie-card/movie-card.component';
// standalone: true,
// imports: [ 
  //   MoviesSearchComponent,
  //   MoviesListComponent,
  //   MovieCardComponent
  // ],
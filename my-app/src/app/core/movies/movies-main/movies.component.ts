import { Component } from '@angular/core';
import { MoviesListComponent } from '../movies-list/movies-list.component';
import { MoviesSearchComponent } from '../movies-search/movies-search.component';


@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [MoviesListComponent, MoviesSearchComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent {

}

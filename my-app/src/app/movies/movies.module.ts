import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesSearchComponent } from './movies-search/movies-search.component';
import { MoviesComponent } from './movies-main/movies.component';



@NgModule({
  declarations: [
    MovieCardComponent,
    MoviesListComponent,
    MoviesSearchComponent,
    MoviesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MoviesComponent
  ]
})
export class MoviesModule { }

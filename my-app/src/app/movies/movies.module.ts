import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesSearchComponent } from './movies-search/movies-search.component';
import { MoviesComponent } from './movies-main/movies.component';
import { RouterModule } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';



@NgModule({
  declarations: [
    MovieCardComponent,
    MoviesListComponent,
    MoviesSearchComponent,
    MoviesComponent,
    MovieDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MoviesComponent
  ]
})
export class MoviesModule { }

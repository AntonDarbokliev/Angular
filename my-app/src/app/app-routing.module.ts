import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { MoviesComponent } from './movies/movies-main/movies.component';
import { AboutComponent } from './about/about.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';

export const routes: Routes = [
  {path: 'browse', component: MoviesComponent  },
  {path: 'about', component: AboutComponent  },
  {path: 'movie/:id', component: MovieDetailsComponent  },
  { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }

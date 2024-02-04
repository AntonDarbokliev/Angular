import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { MoviesComponent } from './movies/movies-main/movies.component';

export const routes: Routes = [
  {path: 'browse', component: MoviesComponent  },
  {path: '', redirectTo: 'browse'  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }

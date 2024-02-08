import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { MoviesComponent } from './movies/movies-main/movies.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  {path: 'browse', component: MoviesComponent  },
  {path: 'about', component: AboutComponent  },
  {path: '',pathMatch: 'full' ,redirectTo: 'browse'  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }

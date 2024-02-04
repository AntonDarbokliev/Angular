import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}

import { HomeComponent } from './home/home.component';
import { CoreModule } from './core/core.module';
import { MoviesComponent } from './movies/movies-main/movies.component';
import { AppRoutingModule } from './app-routing.module';

    // HomeComponent,
    // CoreModule,
    // MoviesComponent,
    // AppRoutingModule
import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { CoreModule } from './core/core.module';
import { MoviesModule } from './movies/movies.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports : [
    HomeComponent,
    CoreModule,
    MoviesModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}

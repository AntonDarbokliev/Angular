import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies-main/movies.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HomeComponent,
    MoviesComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HomeComponent,
    MoviesComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }

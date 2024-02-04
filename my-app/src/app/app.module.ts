import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { MoviesModule } from './movies/movies.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    CoreModule,
    BrowserModule,
    MoviesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { HttpClient } from '@angular/common/http'
import { MovieData } from '../types/movieTypes'
import { Injectable } from '@angular/core'


@Injectable({
  providedIn: 'root'
})

export class MoviesService {
  private apiUrl = 'https://movies-catalog-web-service.onrender.com'  

  constructor(private http: HttpClient) {}

  getMovies() {
     return this.http.get<MovieData[]>(this.apiUrl)
  }
}

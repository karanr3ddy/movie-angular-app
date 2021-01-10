import { Component, OnInit } from '@angular/core';
import { MoviesBackendService } from './services/movies-backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'movie-angular-app';
  movies: Movie[];
  constructor(public movieBackend:MoviesBackendService){}
  ngOnInit(): void {
    this.movieBackend.getTopRated().then((data:TopRatedMoviesResponse)=>{
      console.log("movies",data);
      this.movies = data.results;
    })
  }

}

export interface TopRatedMoviesResponse {
  page:          number;
  results:       Movie[];
  total_pages:   number;
  total_results: number;
}

export interface Movie {
  adult:             boolean;
  backdrop_path:     string;
  genre_ids:         number[];
  id:                number;
  original_language: string;
  original_title:    string;
  overview:          string;
  popularity:        number;
  poster_path:       string;
  release_date:      string;
  title:             string;
  video:             boolean;
  vote_average:      number;
  vote_count:        number;
}

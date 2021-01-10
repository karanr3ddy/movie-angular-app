import { Component, HostListener, OnInit } from '@angular/core';
import { MoviesBackendService } from './services/movies-backend.service';
import "./simple-grid.css"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'movie-angular-app';
  topRatedMovies: Movie[];
  innerWidth: number;
  upComingMovies: Movie[];
  constructor(public movieBackend:MoviesBackendService){}
  ngOnInit(): void {
    this.movieBackend.getTopRated().then((data:TopRatedMoviesResponse)=>{
      this.topRatedMovies = data.results;
    });
    this.movieBackend.getUpcoming().then((data:UpcomingMoviesResponse)=>{
      this.upComingMovies = data.results;
    });
    this.innerWidth = window.innerWidth;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }
  toPosterUrl(poster_path){
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`
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


export interface UpcomingMoviesResponse {
  dates:         Dates;
  page:          number;
  results:       Movie[];
  total_pages:   number;
  total_results: number;
}

export interface Dates {
  maximum: string;
  minimum: string;
}
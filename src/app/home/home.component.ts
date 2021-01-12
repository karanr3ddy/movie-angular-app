import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie, TopRatedMoviesResponse, UpcomingMoviesResponse } from '../interfaces';
import { MoviesBackendService } from '../services/movies-backend.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'movie-angular-app';
  topRatedMovies: Movie[];
  upComingMovies: Movie[];
  constructor(
      public movieBackend:MoviesBackendService,
      ){}
  ngOnInit(): void {
    this.movieBackend.getTopRated().then((data:TopRatedMoviesResponse)=>{
      this.topRatedMovies = data.results;
    });
    this.movieBackend.getUpcoming().then((data:UpcomingMoviesResponse)=>{
      this.upComingMovies = data.results;
    });
  }

}

import { Component, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Movie } from '../interfaces';
@Component({
  selector: 'app-movie-gallery',
  templateUrl: './movie-gallery.component.html',
  styleUrls: ['./movie-gallery.component.css']
})
export class MovieGalleryComponent implements OnInit, OnChanges {
  innerWidth: number;
  @Input() movies:Movie[];
  @Input() title:string="";
  isLoading=true;
  constructor( private router:Router) {

     }
  ngOnChanges(changes: SimpleChanges): void {
   if(!changes.movies.currentValue) {
     this.isLoading=true;
   }else{
     this.isLoading=false
   }
    
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }
  toPosterUrl(poster_path){
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`
  }
  handleMovieClick(movie){
    const extras:NavigationExtras={
      queryParams:{
        movie
      }
    }
      this.router.navigate(['movie'],extras);
  }
}

import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { StarRatingComponent } from '../feature/star-rating/star-rating.component';
import { Router } from '@angular/router';
import { MovieComponent } from '../movie/movie.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeComponent,
    HeaderComponent ,
    CommonModule ,
    NgbRatingModule ,
    StarRatingComponent,
    MovieComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  trendingMOvies : any;
  theatreMovies : any;
  popularMovie : any;

  constructor(private http : HttpClient , private router : Router){}
    ngOnInit(): void {
      this.getTrensingMovies();
      this.getTheatreMovies();
      this.getPopularMovies();
    }
    getTrensingMovies(){
      this.http.get('http://localhost:5000/assets/data/trending-movies.json').subscribe(
        (movies)=>{
          this.trendingMOvies  = movies;
          console.log(this.trendingMOvies)
        }
      )
    }
    getTheatreMovies(){
      this.http.get('http://localhost:5000/assets/data/theatre-movies.json').subscribe(
        (movies)=>{
          this.theatreMovies = movies;
          console.log(this.theatreMovies)
        }
      )
    }
    getPopularMovies(){
      this.http.get('http://localhost:5000/assets/data/popular-movies.json').subscribe(
        (movies)=>{
          this.popularMovie = movies;
          console.log(this.popularMovie)
        }
      )
    }
    goToMovie(type: string,id:string){
      this.router.navigate(['movie',type,id])
    }
}


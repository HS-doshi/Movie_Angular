import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { StarRatingComponent } from '../feature/star-rating/star-rating.component';
import {CommonModule} from '@angular/common'
@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [HeaderComponent ,
    StarRatingComponent,
    CommonModule
  ],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent implements OnInit {

  type =''
  id =''
  url=''
  movies : any
  notmovie :any
  constructor(private route: ActivatedRoute,
              private http : HttpClient){}

  ngOnInit(): void {
    this.type = this.route.snapshot.params['type']
    this.id = this.route.snapshot.params['id']

    if(this.type === 'trending')
    {
      this.url = ('http://localhost:4200/assets/data/trending-movies.json'),
      this.url = ('http://localhost:5000/assets/data/trending-movies.json')
    }
    if(this.type === 'theatre')
    {
      this.url = ('http://localhost:4200/assets/data/theatre-movies.json'),
      this.url = ('http://localhost:5000/assets/data/theatre-movies.json')
    }
    if(this.type === 'popular')
    {
        this.url =('http://localhost:4200/assets/data/popular-movies.json'),
        this.url =('http://localhost:5000/assets/data/popular-movies.json')
    }
    this.getMovie()
  }
  getMovie(){
      this.http.get(this.url).subscribe(
        (movie)=>{
          this.movies  = movie
          let index = this.movies.findIndex(
            (movie:{id:string})=> movie.id ==this.id)
            if(index > -1){
                this.notmovie = this.movies[index]
            }
        }
      );
  }
}




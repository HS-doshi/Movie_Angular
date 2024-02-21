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
// {
//   "id": 21,
//   "name": "Shrill",
//   "cover": "https://resizing.flixster.com/oRGQ7wfOztZ8eR5QSTFqAi8lXfk=/180x258/v2/https://resizing.flixster.com/sdzIZZLrB27H_ylYTb3E901n6LI=/ems.ZW1zLXByZC1hc3NldHMvdHZzZWFzb24vNjE1MDg1ZDgtMGU4NC00MTQzLTgwODktNWZkYmE5N2FkZDdiLmpwZw==",
//   "rating": 4.12,
//   "reviews": [
//   ]
// }

// ,
//   {
//     "id": 15,
//     "name": "Candy Man",
//     "cover": "https://resizing.flixster.com/PsxQgGOGHuH7uZnVYeiIeqh0H-M=/180x257/v2/https://resizing.flixster.com/Hpqr7nXbuWjldQs_1XGUyPExDto=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2MyZDU0OTU5LWMyNDEtNDUyOC1hZmYyLTQwOGE2ZWQ2NjhmMy5qcGc=",
//     "rating": 3.45,
//     "reviews": [
//     ]
//   },
//   {
//     "id": 16,
//     "name": "The Card Counter",
//     "cover": "https://resizing.flixster.com/Ysr6evIRXM5qV6unZwhrFTDklu4=/180x257/v2/https://resizing.flixster.com/LfEmWhyYSAJEqbT9BKeFZJQHBOs=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzAyZWMwZjFiLWU0NWYtNDEyOC04ZjJkLTA3MjM5ZjAzODMxMS5qcGc=",
//     "rating": 3.85,
//     "reviews": [
//     ]
//   }

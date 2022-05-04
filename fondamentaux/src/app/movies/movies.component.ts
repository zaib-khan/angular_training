import { Component, OnInit} from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit{
  title:string = "Les baboins !";
  movies:string[] | undefined;
  imgUrl = "https://picsum.photos/400/200";

  constructor(service:MoviesService){
    this.movies = service.getMovies();
  }

  // ngOnInit(): void {
  //   let service = new MoviesService();
  //   this.movies = service.getMovies();
  // }
  ngOnInit(): void {
    //let service = new MoviesService();
    
  }
  getTitle(){
    return this.title;
  }
}
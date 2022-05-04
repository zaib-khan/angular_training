import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  getMovies(){
    return ["Seigneur des anneaux","La planète des singes","Pirates des caraibes"];
  }
}

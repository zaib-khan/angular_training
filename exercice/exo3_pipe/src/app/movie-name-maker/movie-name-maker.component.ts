import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'movieNameMaker',
  templateUrl: './movie-name-maker.component.html',
  styleUrls: ['./movie-name-maker.component.scss']
})
export class MovieNameMakerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  movieName:string = "";

}

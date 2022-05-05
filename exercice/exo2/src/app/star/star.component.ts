import { Component, OnInit } from '@angular/core';

import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {
  faStar = faStar;
  regularStar = regularStar;
  isFull:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  clickEvent(){
    this.isFull = !this.isFull;
  }
  getIcon(){
    return (this.isFull)?this.faStar:this.regularStar;
  }

 




}

import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { faStar as sr } from '@fortawesome/free-regular-svg-icons';
import { faStar as ss } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent {
  @Input("isFavorite") isFav:boolean|undefined;
  @Output("change") myChange = new EventEmitter();
  starS = ss;
  starR = sr; 
 






  // setFavorite(){
  //   this.isFav = !this.isFav;
  //   this.myChange.emit();
  // }

  
  setFavorite(){
    this.isFav = !this.isFav;
    this.myChange.emit(this.isFav);
  }

}

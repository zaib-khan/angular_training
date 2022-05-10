import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reusable-component';

  post = {
    title:"My first post",
    isFav:true
  }

  onFavoriteChange(favori:any){
    console.log(`Favorite is changed ${favori}`);
    
  }


}

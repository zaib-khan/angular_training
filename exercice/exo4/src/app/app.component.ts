import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'exo4';

  tweets = [
    {
      body : "Premier tweet",
      likesCount: 40,
      isLiked : true
    },
    {
      body : "Deuxième tweet",
      likesCount: 23,
      isLiked : false
    },
    {
      body : "Troisième tweet",
      likesCount: 10,
      isLiked : false
    }
  ]




}

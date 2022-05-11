import { Component, OnInit,Input,Output } from '@angular/core';

import { faHeart, faLariSign } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'counter',
  templateUrl: './like-counter.component.html',
  styleUrls: ['./like-counter.component.scss']
})
export class LikeCounterComponent {
  heart = faHeart
  
  test = 0;
  @Input("tweetObj") tweet : any;
  constructor(){

  }
  ngOnInit(): void{
  } 
  
  


  clickEvent(){
    this.changeIsLiked();
    this.toggleLike();
    
  }

  getLikeCount(){
    return this.tweet.likesCount;
  }
  getBody(){
    return this.tweet.body;
  }
  getIsLiked(){
    return this.tweet.isLiked;
  }


  changeIsLiked(){
    this.tweet.isLiked = !this.tweet.isLiked;
  }
  
  toggleLike(){
    if(this.getIsLiked()){
      this.tweet.likesCount++;
    }else{
      this.tweet.likesCount--;
    }
  }


}

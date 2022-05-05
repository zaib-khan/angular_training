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
  cols = [];
  isActive:boolean = false;
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

  onSave(){
    console.log("Le btn a bien été crée !");
    
  }
  onSave2($event:Event){
    console.log("Le btn a bien été crée",$event);
    
  }
  onSave3($event:Event){
    console.log("le bouton a été cliquer :",$event);
  }
  onDivClicked(){
    console.log("La div a été cliqué");
  }
  // onKeyup($event:KeyboardEvent){
  //   if($event.keyCode == 13){
  //     console.log("ENTER");
  //   }
  // }
  onKeyUp(){
    console.log("bonjour");
  }

  onKeyUp2($event:any){
    console.log($event.target.value);
  }

  onKeyUp3(email:any){
    console.log(email);
  }

  monEmail:string = "zaib16khan@gmail.com";
  onKeyUp4(){
    console.log(this.monEmail);
    
  }
  tonEmail:string="zaib21khan@gmail.com";
  onKeyUp5(){
    console.log(this.tonEmail);
    
  }

}
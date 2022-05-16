import { Component } from '@angular/core';
import { faStar as rStar} from '@fortawesome/free-regular-svg-icons';
import { faStar as sStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'directive';
  liste = [1,2,3]
  lessons = true


  viewMode = 'map'
  isSelected = true;





  courses = [
    {id:1,name:"course"},
    {id:2,name:"course"},
    {id:3,name:"course"},
  ]

  onAdd(){
    this.courses.push({id:4,name:'course'});
  }
  onRemove(course:any){
    let index = this.courses.indexOf(course);
    this.courses.splice(index,1);
  }
  onChange(course:any){
    /* --------- course.name = "update" -------- */
  }

  Rstar = rStar;
  Sstar = sStar;

  onClick(){
    this.isSelected = !this.isSelected;
  }

  canSave = true;

}

import { Component, OnInit,Input } from '@angular/core';
import { faChevronUp as up, faChevronDown as down} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downArrow = down;
  upArrow = up;

  isExpand:boolean|any;

  

  zippyClickEvent(){
    this.isExpand = !this.isExpand;
  }

  @Input('title') title:string|any;


}

import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent  {
  
  @Input("tabTweets") tweets:any;



}

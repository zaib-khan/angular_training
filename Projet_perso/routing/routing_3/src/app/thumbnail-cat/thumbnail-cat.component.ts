import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-thumbnail-cat',
  templateUrl: './thumbnail-cat.component.html',
  styleUrls: ['./thumbnail-cat.component.scss']
})
export class ThumbnailCatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input("title") catTitle : any;



}

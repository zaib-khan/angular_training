import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { CatListeInfoService } from '../cat-liste-info.service';

@Component({
  selector: 'app-cat-page',
  templateUrl: './cat-page.component.html',
  styleUrls: ['./cat-page.component.scss']
})
export class CatPageComponent implements OnInit {

  src:string;

  constructor(private route:ActivatedRoute, catService:CatListeInfoService) {
    this.src = catService.getOneCat(+this.route.snapshot.paramMap.get('id')!);
  }

  ngOnInit(): void {  
  }

}

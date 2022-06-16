import { Component, OnInit } from '@angular/core';
import { CatListeInfoService } from '../cat-liste-info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  catTab:any

  constructor(catservice:CatListeInfoService) {
    this.catTab = catservice.getCatTable();
  }

  ngOnInit(): void {
  }





}

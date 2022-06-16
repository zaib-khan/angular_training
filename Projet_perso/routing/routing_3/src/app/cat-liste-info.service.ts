import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatListeInfoService {

  catTab = [
    {id:0,src:'https://64.media.tumblr.com/57f55afee7406c89ae445a428de5af12/tumblr_nn6od9rYpQ1r4xjo2o1_250.gifv',title:`Cat 1`},
    {id:1,src:'https://64.media.tumblr.com/97b5be54ff303c62380a4593ff5d8a5c/tumblr_ndt0a6zhAe1r4xjo2o1_250.gifv',title:`Cat 2`},
    {id:2,src:'https://64.media.tumblr.com/751c497c9e8fe4bf25fda64d53e3229b/tumblr_nbaa9sZBKd1r4xjo2o1_250.gifv',title:`Cat 3`},
    {id:3,src:'https://64.media.tumblr.com/cde31840019eec8fd7468455c88e3ddc/tumblr_n92rgh47IY1r4xjo2o1_250.gifv',title:`Cat 4`},
    {id:4,src:'https://64.media.tumblr.com/52b7aa908d9b033f56d9dd931a90ed6b/tumblr_n74gtaF4JP1r4xjo2o1_250.gifv',title:`Cat 5`},
    {id:5,src:'https://64.media.tumblr.com/ef7c55a792603aedab7545a3347121ae/tumblr_n4sxp1v62J1r4xjo2o1_250.gifv',title:`Cat 6`},
    {id:6,src:'https://64.media.tumblr.com/d0db33edebbfc6d56ec41600a1c9afeb/tumblr_n4lx886yCF1r4xjo2o1_250.gifv',title:`Cat 7`},
    {id:7,src:'https://64.media.tumblr.com/764a7a5b55c400887a366fc95327345a/tumblr_n2b3bzPfgI1r4xjo2o1_250.gifv',title:`Cat 8`},
    {id:8,src:'https://64.media.tumblr.com/01982aa64c9242c573baae4055b5dc5c/tumblr_mzgmj40KBk1r4xjo2o1_250.gifv',title:`Cat 9`},
    {id:9,src:'https://64.media.tumblr.com/2c07c6dd0db42f989bf47b741cb4516f/tumblr_msxw68bnA21r4xjo2o1_250.gifv',title:`Cat 10`},
    {id:10,src:'https://64.media.tumblr.com/ea3884f17979500c2406fd4d21891195/tumblr_mr4humiiCH1r4xjo2o1_250.gifv',title:`Cat 11`},
    {id:11,src:'https://64.media.tumblr.com/42181e20797b546c2f842ce8f6bf9f55/tumblr_mmel6b5X5K1r4xjo2o1_250.gifv',title:`Cat 12`},
  ];



  constructor() { }

  getCatTable(){
    return this.catTab;
  }
  getOneCat(catId:number){
    return this.catTab[catId].src;
  }



}

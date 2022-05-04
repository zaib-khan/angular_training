import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'auteur',
  templateUrl: './auteur.component.html',
  styleUrls: ['./auteur.component.scss']
})

export class AuteurComponent implements OnInit {

  title:string = "Ceci est mon TITLE";
  
  tab:Array<{id:number,name:string,nbPage:number,auteur:string}> = [
    {id:0,name:"book1",nbPage:500,auteur:"zaib"},
    {id:1,name:"book2",nbPage:125,auteur:"ben"},
    {id:2,name:"book3",nbPage:325,auteur:"toto"}
  ];
  constructor() { }
  ngOnInit(): void {
  }
}
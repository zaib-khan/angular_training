import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  posts = [
    {id:1,title:'hello world'},
    {id:2,title:'hello world'},
    {id:3,title:'hello world'},
    {id:4,title:'hello world'},
    {id:5,title:'hello world'},
    {id:6,title:'hello world'},
    {id:7,title:'hello world'},
    {id:8,title:'hello world'},
    {id:9,title:'hello world'},
  ]






}

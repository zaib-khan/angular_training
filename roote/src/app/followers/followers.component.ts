import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  followers = [
    { id: 1, img: "https://picsum.photos/id/23/80/80", login: 'toto'},
    { id: 2, img: "https://picsum.photos/id/34/80/80", login: 'tata'},
    { id: 3, img: "https://picsum.photos/id/56/80/80", login: 'youpla'},
    { id: 4, img: "https://picsum.photos/id/45/80/80", login: 'boum'},
    { id: 5, img: "https://picsum.photos/id/67/80/80", login: 'tralala'},
    { id: 6, img: "https://picsum.photos/id/12/80/80", login: 'hey'},
  ]






}

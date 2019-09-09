import { Component, Input, OnInit } from '@angular/core';
import {PostListItemComponent} from "../post-list-item/post-list-item.component" ;

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit {

  @Input() posts: [];


constructor() { }

  ngOnInit() {
  }

}

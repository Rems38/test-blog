import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})

export class PostListItemComponent implements OnInit {

       @Input() title: string;
       @Input() content: string;
       @Input() loveIts: number;
       @Input() created_at: Date;

  constructor() { }

  ngOnInit() {
  }


isGreen() {
if (this.loveIts > 0)
return 1;
}

isRed() {
if (this.loveIts < 0)
return 1;
}

add() {
this.loveIts++;
}

remove() {
this.loveIts--;
}

}

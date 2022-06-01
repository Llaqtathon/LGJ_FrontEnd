import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-post-feed-card',
  templateUrl: './post-feed-card.component.html',
  styleUrls: ['./post-feed-card.component.css']
})
export class PostFeedCardComponent implements OnInit {
  @Input() post: Post={}
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts?: Post[];
  title='Publicaciones';
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getPosts();
  }
  getPosts = (): void=>{
    this.postService.getAll().subscribe({
      next: (data: Post[]) => {
        this.posts = data;
      },
      error: (err)=>{ console.log(err)}
    })
  }


}

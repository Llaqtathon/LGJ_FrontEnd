import { PostFormsService } from './../../../services/post-form.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  @Input() imageURL: string=InitialImage;
  @Input() createdPost: Post={
    username: '', 
    description: '',
    foto_post: '',
  }

  uploadForm: FormGroup;
  constructor(
    public fb: FormBuilder, private groupService: PostService, 
    private route: ActivatedRoute, private router: Router, private service: PostFormsService) {
      this.uploadForm = new FormGroup({
        username: new FormControl('', [
          Validators.required,
          Validators.minLength(1),
        ]),
        description: new FormControl('', [
          Validators.required,
          Validators.minLength(4),
        ]),
        foto_post: new FormControl('', [
          Validators.required,
          Validators.minLength(4),
        ])
      })
      
    if (this.service._modified) {
      this.uploadForm.setValue({
        username: this.service._state.username,
        description: this.service._state.description,
        foto_post: this.service._state.foto_post
      });
      this.createdPost = this.service._state;

      this.service._state = {};
      this.service._modified = false;
    }

 }

 ngOnInit(): void {
  console.log(this.createdPost);
  if (this.router.url.includes('add')){

  } else{
    this.route.params.subscribe(params => {
      this.getPost(params['id']);
    });
  }
}
onSubmit() {
  if( this.uploadForm.valid ){
    const group = {
      ...this.uploadForm.value, 
    };

    this.createdPost = group;
    this.createPost();
    this.router.navigate(['/post']);
  }
}
showPreview(event: Event) {
  const url = (event.target as HTMLInputElement).value;

  if (url.startsWith('http')) {
    this.imageURL = url;
  } else {
    this.imageURL = InitialImage;
  }
}
createPost() {
  this.groupService.create(this.createdPost).subscribe({
    next: (data: Post) => {
      console.log(data)
    },
    error: (err) => { console.log(err) }
  })
}
getPost = (id: number): void => {
  this.groupService.get(id).subscribe({
    next: (data: Post) => {
      this.createdPost = data;
      console.log(this.createdPost)
    },
    error: (err) => { console.log(err) }
  })
}

}
const InitialImage = "image.png";
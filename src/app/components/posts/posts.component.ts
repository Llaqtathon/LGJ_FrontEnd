import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input() title: string = 'Publicaciones';
  @Input() action: 'back' | 'add' = 'add';
  @Output() customTitle(){};
  constructor(
    private _location: Location, private router: Router, public route: ActivatedRoute) { 
      router.events.subscribe((val) => {
        if (val instanceof NavigationEnd){
          const[,inicial, second]=val.url.split('/');
          this.action=!second?'add':'back';

          if(!second){
            this.title='Publicaciones';
          } else {
            this.route.children[0].data.subscribe(data => {
              if (data['title']) {this.title=data['title'];}
            });
          }
        }
      });
    }

  ngOnInit(): void {
  }
  onBack(){
    this._location.back();
  }
}

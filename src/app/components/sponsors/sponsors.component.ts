import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent implements OnInit {
  @Input() title: string = 'Sponsors';
  @Input() action: 'back' | 'add' = 'add';
  @Output() customTitle() {}

  constructor(
    private _location: Location, private router: Router, public route: ActivatedRoute) { 
      router.events.subscribe((val) => {
        if (val instanceof NavigationEnd){
          const[,_, second]=val.url.split('/');
          this.action=!second?'add':'back';

          if(!second){
            this.title='Sponsors';
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

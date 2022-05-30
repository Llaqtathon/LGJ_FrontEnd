import { Component, Input, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Route, Router } from '@angular/router';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  @Input() title: string = 'Grupos';
  @Input () action: 'back' | 'add' = 'add';
  @Output () customTitle() {}

  constructor(
    private _location: Location, private router: Router, public route: ActivatedRoute) {
    router.events.subscribe((val) => {
        if (val instanceof NavigationEnd) {
          const [,inicial, second] = val.url.split('/');
          this.action = !second ? 'add' : 'back';


          if (!second) { 
            this.title = 'Grupos';
          } else {
            this.route.children[0].data.subscribe(data => {
              if (data['title']) { this.title = data['title']; }
            });
          }
        }
    });

   }

  ngOnInit(): void {
    
  }

  onBack() {
    this._location.back();
  }
}

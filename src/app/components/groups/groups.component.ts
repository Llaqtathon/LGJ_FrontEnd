import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { UserGlobalService } from 'src/app/services/user-global.service'

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  title: string = 'Grupos';
  action: 'back' | 'add' = 'add';
  @Input() isOrg: boolean = false;

  constructor(
    private _location: Location, private router: Router, public route: ActivatedRoute, private ugs: UserGlobalService ) {}

  ngOnInit(): void {
    this.changeTitle(this._location.path());

    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.changeTitle(val.url);
      } 
    });

    this.isOrg = this.ugs.isOrg;
  }

  changeTitle(url: string){
      const [,, path, edit] = url.split('/');
      this.action = !path ? 'add' : 'back';

      if (!path) { 
        this.title = 'Grupos';
      } else if (edit && edit.includes('edit')) {
        this.title = 'Editar Grupo';
      } else if (path.split('=')[1]){
        this.title = decodeURIComponent(path.split('=')[1]);
      } else {
        this.route.children[0].data.subscribe(data => {
          if (data['title']) { this.title = data['title']; }
        });
      } 
  }

  onBack() {
    this._location.back();
  }


}

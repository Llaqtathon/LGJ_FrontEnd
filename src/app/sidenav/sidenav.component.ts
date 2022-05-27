import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  links: { path: string; label: string; icon: string; }[] = []; // make type
  crrMenu: { path: string; label: string; }[] = []; // make type


  constructor() {
    const menuOrg = [
      {path: '/', label: 'General'},
    ]

    const menuPar = [
      {path: '/', label: 'General'},
      {path: '/cronogram', label: 'Crónograma'},
      {path: '/mentors', label: 'Mentores'},
      {path: '/groups', label: 'Grupos'},
      {path: '/participants', label: 'Participantes'},
      {path: '/media', label: 'Media'},
      {path: '/sponsors', label: 'Sponsors'},
    ]
    
  }

  ngOnInit(): void {
    const menuPar = [
      {path: '/', label: 'General', icon: 'info'},
      {path: '/cronogram', label: 'Crónograma', icon: 'date_range'},
      {path: '/mentors', label: 'Mentores', icon: 'school'},
      {path: '/groups', label: 'Grupos', icon: 'groups'},
      {path: '/participants', label: 'Participantes', icon: 'group'},
      {path: '/media', label: 'Media', icon: 'camera_alt'},
      {path: '/sponsors', label: 'Sponsors', icon: 'work'},
    ]
    this.links = menuPar;
  }

}

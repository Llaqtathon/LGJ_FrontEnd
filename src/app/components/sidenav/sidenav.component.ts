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
    // const menuPar = [
    //   {path: '/', label: 'General'},
    //   {path: '/cronogram', label: 'Cronograma'},
    //   {path: '/mentors', label: 'Mentores'},
    //   {path: '/groups', label: 'Grupos'},
    //   {path: '/participants', label: 'Participantes'},
    //   {path: '/media', label: 'Media'},
    //   {path: '/sponsors', label: 'Sponsors'},
    // ]
  }

  ngOnInit(): void {

    const gral = [
      {path: '/', label: 'General', icon: 'info'},
      {path: '/cronogram', label: 'Cronograma', icon: 'date_range'},
      {path: '/media', label: 'Media', icon: 'camera_alt'},
      {path: '/sponsors', label: 'Sponsors', icon: 'work'}
    ]

    const menuPar = [
      {path: '/', label: 'General', icon: 'info'},
      {path: '/cronogram', label: 'Cronograma', icon: 'date_range'},
      {path: '/mentors', label: 'Mentores', icon: 'school'},
      {path: '/groups', label: 'Grupos', icon: 'groups'},
      {path: '/participants', label: 'Participantes', icon: 'group'},
      {path: '/media', label: 'Media', icon: 'camera_alt'},
      {path: '/sponsors', label: 'Sponsors', icon: 'work'},
    ]
    
    const menuOrg = [
      {path: '/', label: 'General', icon: 'info'},
      {path: '/cronogram', label: 'Cronograma', icon: 'date_range'},
      {path: '/sponsors', label: 'Sponsors', icon: 'work'},
      {path: '/mentors', label: 'Mentores', icon: 'school'},
      {path: '/participants', label: 'Participantes', icon: 'group'},
      {path: '/groups', label: 'Grupos', icon: 'groups'},
      {path: '/media', label: 'Media', icon: 'camera_alt'},
    ]

    this.links = menuOrg;
  }

}

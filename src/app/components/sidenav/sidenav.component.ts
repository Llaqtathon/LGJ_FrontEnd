import { Router } from '@angular/router';
import { UserGlobalService } from './../../services/user-global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  links: { path: string; label: string; icon: string; active?:boolean; }[] = []; // make type
  // crrMenu: { path: string; label: string}[] = []; // make type
  activeTab: string = '/';
  
  constructor(private ugs: UserGlobalService, private router: Router) {
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
    // this.router.events.subscribe((data:any) => { this.activeTab = data.url; });
    this.ugs.updateCurrTab(window.location.pathname);
    this.activeTab = this.ugs.currentTab;
    // console.log(this.ugs.currentTab, this.router.url);
    // this.getCurrTab();

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

    this.links = this.ugs.isOrg ? menuOrg :
                  this.ugs.isLogged ? menuPar : gral;
  }

  getCurrTab = (): void => {
    this.ugs.globalVarUpdate?.subscribe({
      next: (data: any) => {
        this.activeTab = data.currentTab;
        console.log('SN', this.ugs.currentTab);
      },
      error: (err) => { console.log(err) }
    });
  }

  onTabClick(tab: {path: string; label: string; icon: string; active?:boolean;}) {
    // this.router.navigate([tab]);
    this.links.forEach(tab => { tab.active = false; });
    tab.active = true;
    this.activeTab = tab.path;
    this.ugs.updateCurrTab(tab.path);
  }
}

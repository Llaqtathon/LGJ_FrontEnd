import { UserGlobalService } from './../../services/user-global.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Input() org: boolean = false;
  @Input() logged: boolean = false;
  activeTab: string = '/';
  crrMenu: { path: string; label: string, active?:boolean; }[] = []; // make type

  isLoggedIn() {
    return false;
  }

  constructor(private ugs: UserGlobalService, private router: Router) { 
  }
  
  ngOnInit(): void {
    this.ugs.updateCurrPag(this.router.url);
    this.getCurrPage();

    const menuOrg = [
      {path: '/', label: 'Eventos activos'},
      {path: '/stats', label: 'Estadisticas'},
      {path: '/participants', label: 'Participantes'},
      {path: '/pastEditions', label: 'Ediciones pasadas'},
      {path: '/games', label: 'Juegos'},
    ];

    const menuPar = [
      {path: '/', label: 'Eventos activos'},
      {path: '/pastEditions', label: 'Ediciones pasadas'},
      {path: '/games', label: 'Juegos'},
    ];

    this.crrMenu = this.ugs.isOrg ? menuOrg : menuPar;
  }
  
  getCurrPage = (): void => {
    this.ugs.globalVarUpdate?.subscribe({
      next: (data: any) => {
        this.activeTab = data.currentTab;
        console.log('T', this.ugs.currentPag);
      },
      error: (err) => { console.log(err) }
    });
  }

  //TODO: Move accebility menu to a separate component
  decreaseFontSize() {
    if (parseInt(document.body.style.fontSize) > 11) {
      document.body.style.fontSize = (parseInt(document.body.style.fontSize) - 2) + 'pt';
    }
  }

  increaseFontSize() {
    if (parseInt(document.body.style.fontSize) < 15) {
      document.body.style.fontSize = (parseInt(document.body.style.fontSize) + 2) + 'pt';
    }
  }

  toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
  }

  // setActiveAttr() {
  //   this.crrMenu.forEach(tab => {
  //     tab.path === this.activeTab ? tab.active = true : tab.active = false;
  //   });
  // }
  onTabClick(tab: {path:string, label:string, active?:boolean}) {
    // this.router.navigate([tab]);
    this.crrMenu.forEach(tab => { tab.active = false; });
    tab.active = true;
    this.activeTab = tab.path;
    this.ugs.updateCurrPag(tab.path);
    this.router.navigate([tab.path]);
  }
}

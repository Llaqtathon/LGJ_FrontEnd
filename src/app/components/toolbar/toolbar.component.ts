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
  crrMenu: { path: string; label: string; }[] = []; // make type

  isLoggedIn() {
    return false;
  }

  constructor(private ugs: UserGlobalService, private router: Router) { 
  }

  ngOnInit(): void {

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

  //TODO: Move accebility menu to a separate component
  decreaseFontSize() {
    if (parseInt(document.body.style.fontSize) > 10) {
      document.body.style.fontSize = (parseInt(document.body.style.fontSize) - 2) + 'px';
    }
  }

  increaseFontSize() {
    if (parseInt(document.body.style.fontSize) < 20) {
      document.body.style.fontSize = (parseInt(document.body.style.fontSize) + 2) + 'px';
    }
  }

  toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
  }
}

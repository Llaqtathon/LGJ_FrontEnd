import { UserGlobalService } from './../../services/user-global.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Input() org: boolean = false;
  @Input() logged: boolean = false;
  crrMenu: { path: string; label: string; }[] = []; // make type

  isLoggedIn() {
    return false;
  }

  constructor(private ugs: UserGlobalService) {
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
    document.body.style.fontSize = (parseInt(document.body.style.fontSize)-1) + "pt";
  }

  increaseFontSize() {
    document.body.style.fontSize = (parseInt(document.body.style.fontSize)+1) + "pt";
  }

  toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
  }
}

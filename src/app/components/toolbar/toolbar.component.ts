import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  crrMenu: { path: string; label: string; }[] = []; // make type
  isLoggedIn() {
    return false;
  }

  constructor() {
    
  }

  ngOnInit(): void {
    const menuOrg = [
      {path: '/', label: 'Eventos activos'},
      {path: '/stats', label: 'Estadisticas'},
      {path: '/participants', label: 'Participantes'},
      {path: '/pastEditions', label: 'Ediciones pasadas'},
      {path: '/games', label: 'Juegos'},
      {path: '/addGroup', label: 'Agregar grupo'},
    ]

    const menuPar = [
      {path: '/', label: 'Eventos activos'},
      {path: '/pastEditions', label: 'Ediciones pasadas'},
      {path: '/games', label: 'Juegos'},
    ]

    this.crrMenu = menuOrg;
  }

  //TODO: Move accebility menu to a separate component
  decreaseFontSize() {
    document.body.style.fontSize = '12px';
  }

  increaseFontSize() {
    document.body.style.fontSize = '16px';
  }

  toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
  }
}

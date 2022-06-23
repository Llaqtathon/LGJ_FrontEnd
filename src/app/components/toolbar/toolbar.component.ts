import { Edition } from 'src/app/models/edition.model';
import { EditionsService } from 'src/app/services/editions.service';
import { UserGlobalService } from './../../services/user-global.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

class Link {
  path?: string;
  label?: string;
  active?: boolean;
  submenu?: Link[];
  id?: number;
}

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Input() org: boolean = false;
  @Input() logged: boolean = false;
  @Input() selectedEdition!: Edition;
  @Output() selectedEditionChange = new EventEmitter<Edition>();
  activeTab: string = '/';
  crrMenu: Link[] = []; 
  edsMenu: Link[] = [];
  eds: Edition[] = [];

  isLoggedIn() {
    return false;
  }

  constructor(private router: Router,
              private ugs: UserGlobalService,
              private editionsService: EditionsService) { 
  }
  
  ngOnInit(): void {
    this.ugs.updateCurrPag(this.router.url);
    this.getCurrPage();
    this.getActiveEditions();

    const menuOrg = [
      {path: '/', label: 'Eventos activos', submenu: this.edsMenu},
      {path: '/stats', label: 'Estadisticas'},
      {path: '/participants', label: 'Participantes'},
      {path: '/pastEditions', label: 'Ediciones pasadas'},
      {path: '/games', label: 'Juegos'},
    ];

    const menuPar = [
      {path: '/', label: 'Eventos activos', submenu: this.edsMenu},
      {path: '/pastEditions', label: 'Ediciones pasadas'},
      {path: '/games', label: 'Juegos'},
    ];

    this.crrMenu = this.ugs.isOrg ? menuOrg : menuPar;
  }

  getActiveEditions = (): Boolean => {
    this.editionsService.getAllActive().subscribe({
      next: (data: Edition[]) => {
        this.ugs.updateActiveEdicions(data);
        // this.edsMenu = [];
        data.forEach(ed => {
          this.edsMenu.push({path: '/edition/' + ed.id, label: ed.name});
          this.eds.push(ed);
          // this.edsMenu.push({path: '/edition-active/', label: ed.name, id: ed.id});
        })
        console.log('TB gae',data, this.edsMenu);
        return true;
      },
      error: (err) => { console.log(err) }
    });
    return false;
  }
  
  getCurrPage = (): void => {
    this.ugs.globalVarUpdate?.subscribe({
      next: (data: any) => {
        this.activeTab = data.currentTab;
        console.log('TB gcp', this.ugs.currentPag);
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
  onTabClick(tab: Link, i?:number) {
    // this.router.navigate([tab]);
    this.crrMenu.forEach(tab => { tab.active = false; });
    tab.active = true;
    this.activeTab = tab.path ?? '/';
    this.ugs.updateCurrPag(tab.path ?? '/');
    this.router.navigate([tab.path]);
    console.log('TB tc 0', this.activeTab, tab.path);
    this.activeTab = tab.path ? tab.path : '/';
    console.log('TB tc 1', this.activeTab, tab.path);

    if (i !== undefined) this.onEditionSelection(i);

    this.ugs.updateCurrPag(this.activeTab);
    console.log('TB tc 2', this.activeTab, i);

  }

  onEditionSelection(i:number) {
    this.selectedEditionChange.emit(this.eds[i]);
    console.log('TB es', this.eds[i], this.selectedEdition);
  }
}

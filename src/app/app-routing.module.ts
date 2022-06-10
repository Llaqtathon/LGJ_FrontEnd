import { MentorsNewComponent } from './components/mentors/mentors-new/mentors-new.component';
import { MicroeventsComponent } from './components/microevents/microevents.component';
import { MentorsComponent } from './components/mentors';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { 
  GroupAddComponent, 
  GroupDetailsComponent, 
  GroupsListComponent, 
  GameAddComponent, 
  GroupsComponent
} 
from './components/groups';
import { PastEditionsComponent } from './components/past-editions/past-editions.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'edition/:id',
    children: [
      // { path: '' },  //general
      { path: 'mentors',
        children: [
          { path: '', component: MentorsComponent, data: { title: "Mentores :id" } },
          { path: 'add', component: MentorsNewComponent, data: { title: "Nuevo mentor" } },
        ]
      },
      { path: 'timeline', component: MicroeventsComponent, data: { title: 'Charlas y Talleres :id' } },
    ]
  },
  { path: 'groups', component: GroupsComponent, 
    children: [
      { path: '', component: GroupsListComponent },
      { path: 'add', component: GroupAddComponent, data: { title: 'Nuevo Grupo' } },
      { path: 'add/game', component: GameAddComponent, data: { title: 'Juego' } },
      { path: ':id', component: GroupDetailsComponent },
      { path: ':id/edit', component: GroupAddComponent },
      { path: ':id/game', component: GameAddComponent },
    ]
  },
  { path: 'pastEditions', component: PastEditionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


  //routes for testing
 }

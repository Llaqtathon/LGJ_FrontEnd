import { CurrentEventsComponent } from './components/current-events/current-events.component';
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
import { RegisterUserComponent } from './components/users/register-user/register-user.component';
import { ParticipantsListComponent, ParticipantsEditComponent } from './components/participants';
const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: CurrentEventsComponent,
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
  { path: 'mentors', component: MentorsComponent },
  { path: 'users', component: RegisterUserComponent},
  { path:'participants', component: ParticipantsListComponent},
  { path: 'update/:id', component:ParticipantsEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


  //routes for testing
 }

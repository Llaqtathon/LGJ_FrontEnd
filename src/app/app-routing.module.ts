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
import { LoginUserComponent } from './components/users/login-user/login-user.component';
import { CurrentEventsComponent } from './components/current-events/current-events.component';
import { GamesListComponent } from './components/games/games-list/games-list.component';
import { GameDetailComponent } from './components/games/game-detail/game-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: CurrentEventsComponent,
    children: [
      { path: 'groups', component: GroupsComponent, 
        children: [
          { path: '', component: GroupsListComponent },
          { path: 'add', component: GroupAddComponent, data: { title: 'Nuevo Grupo' } },
          { path: 'add/game', component: GameAddComponent, data: { title: 'Juego' } },
          { path: ':id', component: GroupDetailsComponent },
          { path: ':id/edit', component: GroupAddComponent },
          { path: ':id/game', component: GameAddComponent },
        ],
      },
      { path: 'mentors', component: MentorsComponent },
    ],
  },
  { path: 'pastEditions', component: PastEditionsComponent },
  { path: 'mentors', component: MentorsComponent },
  { path: 'register', component: RegisterUserComponent},
  { path: 'login', component: LoginUserComponent}
  { path: 'games', component: GamesListComponent },
  { path: 'games/:id', component: GameDetailComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


  //routes for testing
 }

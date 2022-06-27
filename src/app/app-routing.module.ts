import { MentorsComponent } from './components/mentors';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { 
  GroupAddComponent, 
  GroupDetailsComponent, 
  GroupsListComponent, 
  GroupsComponent
} 
from './components/groups';
import { CurrentEventsComponent } from './components/current-events/current-events.component';
import { PastEditionsComponent } from './components/past-editions/past-editions.component';
import { RegisterUserComponent } from './components/users/register-user/register-user.component';
import { ParticipantsListComponent, ParticipantsEditComponent } from './components/participants';
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { SponsorsListComponent } from './components/sponsors/sponsors-list/sponsors-list.component';
import { AddSponsorsComponent } from './components/sponsors/add-sponsors/add-sponsors.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostsListComponent } from './components/posts/posts-list/posts-list.component';
import { AddPostComponent } from './components/posts/add-post/add-post.component';
import { LoginUserComponent } from './components/users/login-user/login-user.component';
import { GamesListComponent } from './components/games/games-list/games-list.component';
import { GameDetailComponent } from './components/games/game-detail/game-detail.component';
import { GameAddComponent } from './components/groups';
import { MentorsNewComponent } from './components/mentors';
import { PostDetailsComponent } from './components/posts/post-details/post-details.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'edition/:id',
    component: CurrentEventsComponent,
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
  { path: 'update/:id', component:ParticipantsEditComponent},
      { path: 'mentors',
        children: [
          { path: '', component: MentorsComponent, data: { title: "Mentores :id" } },
          { path: 'add', component: MentorsNewComponent, data: { title: "Nuevo mentor" } },
        ]
      },
/*       { path: 'timeline', 
        component: MicroeventsComponent, 
        data: { title: 'Charlas y Talleres :id' } 
      }, */
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
      { path: 'sponsors', component: SponsorsComponent, 
        children:[
          { path: '', component: SponsorsListComponent},
          { path: 'add', component: AddSponsorsComponent, data: {title: 'Nuevo Sponsor'}},
        ]
      },
      {path: 'media', component: PostsComponent, 
        children:[
          {path: '', component: PostsListComponent},
          {path: 'add', component: AddPostComponent, data: {title: 'Nuevo Post'}},
          {path: ':id', component: PostDetailsComponent}
        ]
      },
  { path: 'pastEditions', component: PastEditionsComponent },
  { path: 'users', component: RegisterUserComponent},
  // { path:'participants', component: userListComplement},
  { path: 'register', component: RegisterUserComponent},
  { path: 'login', component: LoginUserComponent},
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

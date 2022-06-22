import { GameAddComponent } from './components/games/game-add/game-add.component';

// import { userListComplement } from './components/participants/participants.component';
import { PostDetailsComponent } from './components/posts/post-details/post-details.component';
import { MentorsNewComponent } from './components/mentors/mentors-new/mentors-new.component';
import { MicroeventsComponent } from './components/microevents/microevents.component';
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
import { PastEditionsComponent } from './components/past-editions/past-editions.component';
import { RegisterUserComponent } from './components/users/register-user/register-user.component';

import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { SponsorsListComponent } from './components/sponsors/sponsors-list/sponsors-list.component';
import { AddSponsorsComponent } from './components/sponsors/add-sponsors/add-sponsors.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostsListComponent } from './components/posts/posts-list/posts-list.component';
import { AddPostComponent } from './components/posts/add-post/add-post.component';
import { LoginUserComponent } from './components/users/login-user/login-user.component';
import { CurrentEventsComponent } from './components/current-events/current-events.component';
import { GamesListComponent } from './components/games/games-list/games-list.component';
import { GameDetailComponent } from './components/games/game-detail/game-detail.component';



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
  { path: 'users', component: RegisterUserComponent},
  // { path:'participants', component: userListComplement},
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

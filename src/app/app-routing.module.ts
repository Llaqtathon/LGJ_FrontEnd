import { PostDetailsComponent } from './components/posts/post-details/post-details.component';
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
import { SponsorsComponent } from './components/sponsors/sponsors.component';
import { SponsorsListComponent } from './components/sponsors/sponsors-list/sponsors-list.component';
import { AddSponsorsComponent } from './components/sponsors/add-sponsors/add-sponsors.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostsListComponent } from './components/posts/posts-list/posts-list.component';
import { AddPostComponent } from './components/posts/add-post/add-post.component';
const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
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
  { path: 'mentors', component: MentorsComponent },
  { path: 'users', component: RegisterUserComponent},
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


  //routes for testing
 }

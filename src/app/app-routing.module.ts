import { MentorsComponent } from './components/mentors';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { 
  GroupAddComponent, 
  GroupDetailsComponent, 
  GroupsListComponent, 
  GameAddComponent } 
from './components/groups';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'groups', component: GroupsListComponent},
  { path: 'groups/add', component: GroupAddComponent },
  { path: 'groups/add/game', component: GameAddComponent },
  { path: 'groups/:id', component: GroupDetailsComponent },
  { path: 'groups/:id/edit', component: GroupAddComponent },
  { path: 'groups/:id/game', component: GameAddComponent },
  { path: 'mentors', component: MentorsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


  //routes for testing
 }

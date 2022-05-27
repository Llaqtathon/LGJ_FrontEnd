import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGroupComponent, GroupDetailsComponent, GroupsListComponent } from './components/groups';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'groups', component: GroupsListComponent },
  { path: 'groups/add', component: AddGroupComponent },
  { path: 'groups/:id', component: GroupDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


  //routes for testing
 }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGroupComponent, GroupDetailsComponent, GroupsListComponent } from './components/groups';
import { RegisterUserComponent } from './components/users';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'groups', component: GroupsListComponent },
  { path: 'groups/add', component: AddGroupComponent },
  { path: 'groups/:id', component: GroupDetailsComponent },
  { path: 'users', component: RegisterUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


  //routes for testing
 }

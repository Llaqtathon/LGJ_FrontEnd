import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/models/group.model';
import { GroupService } from 'src/app/services/groups.service';

@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.css']
})
export class GroupsListComponent implements OnInit {

  groups?: Group[];
  title = 'Groups';

  constructor(private groupService: GroupService) { }

  ngOnInit(): void {

    this.getGroups();
  }

  getGroups = (): void => {
    //change to be by edition
    this.groupService.getAll().subscribe({
      next: (data: Group[]) => {
        this.groups = data;
        console.log(data)
      },
      error: (err) => { console.log(err) }
    })
  }

  joinGroup = (groupId: number | undefined): void => {
    if (!groupId) return;
    this.groupService.join(groupId, '1').subscribe({
      next: (data: Group) => {
        this.getGroups();
        console.log(data)
      },
      error: (err) => { console.log(err) }
    })
  }

  leaveGroup = (groupId: number | undefined): void => {
    if (!groupId) return;
    this.groupService.leave(groupId, '1').subscribe({
      next: (data: Group) => {
        this.getGroups();
        console.log(data)
      },
      error: (err) => { console.log(err) }
    })
  }

  userInGroup = (groupId: number | undefined, userId:  number | undefined): boolean => {
    if (!groupId) return false;
    return this.groups?.find(group => group.id === groupId)?.users?.find(user => user.id === userId) ? true : false
  }
}

import { Component, OnInit, Inject } from '@angular/core';
import { Group } from 'src/app/models/group.model';
import { GroupService } from 'src/app/services/groups.service';
import { UserGlobalService } from 'src/app/services/user-global.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.css']
})
export class GroupsListComponent implements OnInit {
  groups?: Group[];
  title = 'Groups';
  isOrg = this.ugs.isOrg;
  columns: number = window.window.innerWidth > 600 ? 3 : 2;
  selectedGroups: number[] = [];

  constructor(private groupService: GroupService, private ugs: UserGlobalService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.onBoxResize();
    this.getGroups();
  }

  getGroups = (): void => {
    //change to be by edition
    this.groupService.getAll().subscribe({
      next: (data: Group[]) => {
        this.groups = data;
      },
      error: (err) => { console.log(err) }
    })
  }

  joinGroup = (groupId: number | undefined): void => {
    if (!groupId) return;
    this.groupService.join(groupId, '5').subscribe({
      next: (data: Group) => {
        this.getGroups();
      },
      error: (err) => { console.log(err) }
    })
  }

  leaveGroup = (groupId: number | undefined): void => {
    if (!groupId) return;
    this.groupService.leave(groupId, '2').subscribe({
      next: (data: Group) => {
        this.getGroups();
      },
      error: (err) => { console.log(err); }
    })
  }

  userInGroup = (groupId: number | undefined, userId:  number | undefined): boolean => {
    if (!groupId) return false;
    return this.groups?.find(group => group.id === groupId)?.users?.find(user => user.id === userId) ? true : false
  }

  onSelect(groupId: number | undefined): void {
    if(!groupId) return;

    if (!this.selectedGroups.includes(groupId)) {
      this.selectedGroups.push(groupId);
    } else {
      this.selectedGroups = this.selectedGroups.filter(id => id !== groupId);
    }
  }

  onDelete(groupId: number | undefined): void {
    if (!groupId) return;
    this.groupService.delete(groupId).subscribe({
      next: (data: Group) => {
        this.getGroups();
      },
      error: (err) => { 
        console.log(err);
        this.getGroups(); 
      }
    })
  }

  openDialog(id?: number): void {
    const dialogRef = this.dialog.open(GroupDeleteConfirmationDialog, {
      data: false,
      width: '350px'
    });

    dialogRef.afterClosed().subscribe(res => {
      if (res.data) { 
        if (id) {
          this.onDelete(id);
        } else {
          this.selectedGroups.forEach(id => this.onDelete(id));
        }
      }
    });
  }

  onBoxResize(): void {
    this.columns = window.window.innerWidth > 900 ? 3 : 
      window.window.innerWidth > 750 ? 2 : 1;
  }
}

@Component({
  selector: 'group-list-delete-confirmation',
  templateUrl: 'group-list-delete-confirmation.html',
})
export class GroupDeleteConfirmationDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: string,
    private dialogRef: MatDialogRef<GroupDeleteConfirmationDialog>) { }

  delete() {
    // closing itself and sending data to parent component
    this.dialogRef.close({ data: true })
  }

}

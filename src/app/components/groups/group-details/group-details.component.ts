import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Group } from 'src/app/models/group.model';
import { GroupService } from 'src/app/services/groups.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.css']
})
export class GroupDetailsComponent implements OnInit {
  group?: Group;
  constructor(private route: ActivatedRoute, private groupService: GroupService, private _location: Location) { }

  ngOnInit(): void { 
    this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      this.getGroup(params['id']) //log the value of id
    });
  }

  getGroup = (groupId: string | undefined): void => {
    if (!groupId) return;

    this.groupService.get(groupId).subscribe({
      next: (data: Group) => {
        this.group = data;
      },
      error: (err) => { console.log(err) }
    })
  }

  onBack() {
    this._location.back();
  }

}

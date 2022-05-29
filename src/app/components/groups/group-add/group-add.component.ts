import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Group } from 'src/app/models/group.model';
import { GroupService } from 'src/app/services/groups.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-group-add',
  templateUrl: './group-add.component.html',
  styleUrls: ['./group-add.component.css']
})

//Validate that Input is not empty

export class GroupAddComponent implements OnInit {
  @Input () imageURL: string = initialImage;
  @Input () crrGroup: Group = {
    name: '',
    photoUrl: '',
    users: []
  }
  uploadForm: FormGroup;

  participants: {name: string; image: string }[] = [
    { name: 'Juan', image: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' },
    { name: 'Pedro', image: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' }
  ]


  constructor(public fb: FormBuilder, private groupService: GroupService, private _location: Location, private route: ActivatedRoute) {
    this.uploadForm = this.fb.group({
      photoUrl: '',
      name: '',
    });
   }

  ngOnInit(): void {
    

    this.getGroup('1')
  }


  getGroup = (id: string): void => {
    this.groupService.get(id).subscribe({
      next: (data: Group) => {
        this.crrGroup = data;
        console.log(this.crrGroup)
      },
      error: (err) => { console.log(err) }
    })
  }

  createGroup() {
    this.groupService.create(this.crrGroup).subscribe({
      next: (data: Group) => {
        console.log(data)
      },
      error: (err) => { console.log(err) }
    })
  }

  showPreview(event: Event) {
    const url = (event.target as HTMLInputElement).value;

    if (url.startsWith('http')) {
      this.imageURL = url;
    } else {
      this.imageURL = initialImage;
    }
  }

  removeParticipant(index: number) {
    this.participants.splice(index, 1);
  }

  onBack() {
    this._location.back();
  }
  
  onSubmit() {
    const group = {...this.uploadForm.value, editionId: 2};

    this.crrGroup = group;
    this.createGroup();
  }

  onSelectGame() {
    console.log('game add')
  }
}

const initialImage = "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876";

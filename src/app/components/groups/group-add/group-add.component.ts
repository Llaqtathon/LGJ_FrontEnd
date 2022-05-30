import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Group } from 'src/app/models/group.model';
import { GroupService } from 'src/app/services/groups.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from 'src/app/models/game.model';
import { GroupFormsService } from 'src/app/services/group-forms.service';

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
    users: [],
    game: undefined,
  }

  uploadForm: FormGroup;
  participants: {name: string; image: string }[] = [];
  /*[
    { name: 'Juan', image: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' },
    { name: 'Pedro', image: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' }
  ]*/


  constructor(
      public fb: FormBuilder, private groupService: GroupService, 
      private route: ActivatedRoute, private router: Router, private service: GroupFormsService) {
        this.uploadForm = new FormGroup({
          name: new FormControl('', [
            Validators.required,
            Validators.minLength(4),
          ]),
          photoUrl: new FormControl('', [
            Validators.required,
            Validators.minLength(4),
          ]),
        })
        
      if (this.service._modified) {
        this.uploadForm.setValue({
          name: this.service._state.name,
          photoUrl: this.service._state.photoUrl,
        });
        this.crrGroup = this.service._state;

        this.service._state = {};
        this.service._modified = false;
      }

   }

  ngOnInit(): void {
    console.log(this.crrGroup)
    if (this.router.url.includes('add')){

    } else{
      this.route.params.subscribe(params => {
        this.getGroup(params['id']);
      });
    }
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

  onSubmit() {
    if( this.uploadForm.valid ){
      const group = {
        ...this.uploadForm.value, 
        ...this.crrGroup.game, 
        editionId: 2
      };
  
      this.crrGroup = group;
      this.createGroup();
      this.router.navigate(['/groups']);
    }
  }

  addGame() {
    this.service._state = this.uploadForm.value;
    this.service._modified = true;

    this.router.navigate(['/groups/add/game']);
  }
}

const initialImage = "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876";

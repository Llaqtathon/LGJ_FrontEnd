import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Location } from '@angular/common';
import { GroupService } from 'src/app/services/groups.service';
import { ActivatedRoute } from '@angular/router';
import { Game } from 'src/app/models/game.model';

@Component({
  selector: 'app-game-add',
  templateUrl: './game-add.component.html',
  styleUrls: ['./game-add.component.css']
})


export class GameAddComponent implements OnInit {
  @Input () imageURL: string = '';
  @Input () crrGame: Game = {}
  uploadForm: FormGroup;
  initialImage: string;
  platforms: string[] = [];
  checkboxes: boolean[] = [];

  constructor(public fb: FormBuilder, private groupService: GroupService, private _location: Location, private route: ActivatedRoute) { 
    this.initialImage = "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876";

    this.uploadForm = this.fb.group({
      photoUrl: '',
      name: '',
    });
  }

  ngOnInit(): void {
    this.imageURL = this.initialImage;

    this.checkboxes = new Array(this.platforms.length).fill(false);
  }

  onBack() {
    this._location.back();
  }

  onSubmit() {
    this.groupService.create(this.crrGame).subscribe({
      next: (data: Game) => {
        console.log(data)
      },
      error: (err) => { console.log(err) }
    })
  }

  showPreview(event: Event) {
    const url = (event.target as HTMLInputElement).value;
    this.imageURL = url.startsWith('http') ? url : this.initialImage;
  }
}




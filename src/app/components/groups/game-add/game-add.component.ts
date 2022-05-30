import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Location } from '@angular/common';
import { GroupService } from 'src/app/services/groups.service';
import { ActivatedRoute, RouterStateSnapshot } from '@angular/router';
import { Game } from 'src/app/models/game.model';
import { GroupFormsService } from 'src/app/services/group-forms.service';

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
  platforms: string[] = ['Window', 'Mac', 'Web', 'Linux', 'iOS', 'Android', 'Other'];
  checkboxes: boolean[] = [];

  constructor(public fb: FormBuilder, private groupService: GroupService, private _location: Location, private route: ActivatedRoute, private service: GroupFormsService) { 
    this.initialImage = "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876";


    console.log(this.route.url)
    this.uploadForm = this.fb.group({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      fotoUrl: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      urlGGJ: '',
      urlIcht: '',
      urlAdditional: '',
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      platforms: []
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
    if (this.uploadForm.valid) {
      this.crrGame = this.uploadForm.value;
      this.service._state.game = this.uploadForm.value;
      this.service._modified = true;
      this.addGame();

      console.log('Servicio: ', this.service._state.game)
    }
  }
  
  addGame() {
    /*this.groupService.addGame(1, this.crrGame).subscribe({
      next: (data: Game) => {
        console.log(data)
      },
      error: (err) => { console.log(err) }
    })*/

    this.onBack();
  }


  showPreview(event: Event) {
    const url = (event.target as HTMLInputElement).value;
    this.imageURL = url.startsWith('http') ? url : this.initialImage;
  }
}




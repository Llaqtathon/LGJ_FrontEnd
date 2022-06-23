import { ParticipantsService } from 'src/app/services/participants.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-participants-edit',
  templateUrl: './participants-edit.component.html',
  styleUrls: ['./participants-edit.component.css']
})
export class ParticipantsEditComponent implements OnInit {
    constructor(private rs:ParticipantsService, private router:ActivatedRoute){}
    editParticipant = new FormGroup({
        nombres: new FormControl(''),
        apellidos: new FormControl(''),
        telefono: new FormControl(''),
        email: new FormControl(''),
        dni: new FormControl('')
    });
    users: User[] = []
    val: any;
    message: boolean=false;
    ngOnInit(): void {
        let sub = this.router.params.subscribe(params=>{
            this.val=params['id'];
        })
        console.log(this.val)
    }

}

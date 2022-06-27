import { Component, Input, OnInit, Output } from '@angular/core';
import { ParticipantsService } from 'src/app/services/participants.service';
import { User } from 'src/app/models/user.model';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-participants-list',
  templateUrl: './participants-list.component.html',
  styleUrls: ['./participants-list.component.css']
})
export class ParticipantsListComponent implements OnInit {
    //tutorials?: Tutorial[];
    users: User[] = [];
    user: User = new User;
    id = '';
    rol = '';
    nombres = '';
    editMode: boolean = false;
    currentParticipantId: number = 0;

    constructor(private participantsService: ParticipantsService, private router: Router){}
    participantForm = new FormGroup({
      nombres: new FormControl(''),
      apellidos: new FormControl(''),
      telefono: new FormControl(''),
      email: new FormControl(''),
      dni: new FormControl('')
    })
    ngOnInit(): void {
        this.retrieveTutorials();
    }
    getRequestParams(searchRol: string):any{
        let params: any = {}
        if(searchRol){
            params[`id`]
        }
        if(searchRol){
            params[`nombres`]
        }
        if(searchRol){
            params[`rol`]
        }
        return params;
    }

    retrieveTutorials(): void {
        ///
        const params = this.getRequestParams(this.rol);
        ///
        /*this.tutorialService.getAll().subscribe({
          next: (data) => {
            this.tutorials = data;
            console.log(data);
          },
          error: (e) => console.error(e),
        });*/
    
        this.participantsService.getAll(params).subscribe(
          (response) => {
            const {data} = response;
            this.users = data;
            console.log(response);
          },
          (error) => {
            console.log(error);
          }
        );
    }

    searchRol(): void {
        this.participantsService.findParticipantByrol(this.rol).subscribe({
          next: (data) => {
            this.users = data;
            console.log(data);
          },
          error: (e) => console.error(e),
        });
    }
    searchName(): void {
      this.participantsService.findParticipantByNombres(this.nombres).subscribe({
        next: (data) => {
          this.user = data;
          console.log(data);
        },
        error: (e) => console.error(e),
      });
    }
    updateData(user:{nombres:string, apellidos:string, telefono:string, email:string, dni:string}){
      this.participantsService.updateUser(this.currentParticipantId,user);
    }
    update(id:any){
      this.currentParticipantId = id;
      let currentProduct = this.users.find((p)=>{return p.id == id})
      console.log(this.participantForm);
      
      this.participantForm.setValue({
        nombres: currentProduct?.nombres,
        apellidos: currentProduct?.apellidos,
        telefono: currentProduct?.telefono,
        email: currentProduct?.email,
        dni: currentProduct?.dni
      });
      this.editMode=true;
    }
/*     searchNombres(): void {
        this.userService.findParticipantByName(this.id, this.nombres).subscribe({
          next: (data) => {
            this.users = data;
            console.log(data);
          },
          error: (e) => console.error(e),
        });
    } */
    ///
  }
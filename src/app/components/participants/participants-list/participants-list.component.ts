import { Component, Input, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-participants-list',
  templateUrl: './participants-list.component.html',
  styleUrls: ['./participants-list.component.css']
})
export class ParticipantsListComponent implements OnInit {
    //tutorials?: Tutorial[];
    users?: User[] = [];
    id = '';
    rol = '';
    nombres = '';

    constructor(private userService: UserService){}

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
    
        this.userService.getAll(params).subscribe(
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
        this.userService.findParticipantByRol(this.rol).subscribe({
          next: (data) => {
            this.users = data;
            console.log(data);
          },
          error: (e) => console.error(e),
        });
    }
    searchNombres(): void {
        this.userService.findParticipantByName(this.id, this.nombres).subscribe({
          next: (data) => {
            this.users = data;
            console.log(data);
          },
          error: (e) => console.error(e),
        });
    }
    ///
  }
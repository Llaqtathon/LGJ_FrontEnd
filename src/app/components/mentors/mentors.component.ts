import { Observable } from 'rxjs';
import { ItemTime } from './../../models/item-time.model';
import { Edition } from './../../models/edition.model';
import { MentorAvailab } from './../../models/mentor-availab.model';
import { Time } from './../../common/time';
import { UserGlobalService } from './../../services/user-global.service';
import { MentorTime, MentorEd } from '../../models/mentor-edition.model';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { MentorsService } from 'src/app/services/mentors.service';
import {map, startWith} from 'rxjs/operators';
import { MatOptionSelectionChange } from '@angular/material/core';
import { AreaUtils } from 'src/app/common/areas-utils';

@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.css']
})
export class MentorsComponent implements OnInit {
  // @Input() event: {id:number, inicio:Date, fin:Date} =
  //          {id:0, inicio:this.week.start, fin:this.week.end};
  title = "Mentores";
  currEdition: Edition = {id:0};
  eventDates: FormGroup = new FormGroup({});
  editable: boolean = false;
  mentorsPending: MentorEd[] = [];
  // mentorsAvailables: ItemTime[] = [];
  mentorsAvailables: MentorTime[] = [];
  
  nameFiltered: string = '';
  fcNames = new FormControl('');
  mentorNames: string[] = [];
  filteredNames?: Observable<string[]>;
  panelClosingActions?: Observable<MatOptionSelectionChange | null>

  checked: boolean[] = [];
  areasFilter = Object.entries(AreaUtils.areaIcons).map( ([key, val]) => {
    return {label : key, icon : val, checked : true}
  });
  

  constructor(
    private ugs: UserGlobalService,
    private mentorsService: MentorsService
    ) {
  }
    
  ngOnInit(): void {
    this.editable = this.ugs.isOrg;
    console.log('E',this.currEdition);
    this.setEventDates();
    this.getMentors();
    this.filteredNames = this.fcNames.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    // this.mentorsPending = [
    //   { mentorId:1, nombres:"Juan", apellidos:"Perez", areas:[
    //     {areaName: 'ARTE', yearsOfExperience: 3, priority: 'TOP'},
    //     {areaName: 'NARRATIVA', yearsOfExperience: 3, priority: 'TOP'},
    //   ], status:"PENDIENTE"},
    //   { mentorId:3, nombres:"MAria", apellidos:"VBBB", areas:[
    //     {areaName: 'MUSICA', yearsOfExperience: 3, priority: 'TOP'},
    //     {areaName: 'NARRATIVA', yearsOfExperience: 3, priority: 'TOP'},
    //   ], status:"PENDIENTE"},
    // ];
    // this.mentorsAvailables = [
    //   {id:2, responsible:"Carlos Ggggg", areas:[
    //     {areaName: 'PROGRAMACION', yearsOfExperience: 3, priority: 'TOP'},
    //     {areaName: 'GAME DESIGN', yearsOfExperience: 3, priority: 'TOP'},
    //   ], status:"CONFIRMADO", time:{inicio:new Date("2022-05-31T19:22"), fin:new Date("2022-05-31T21:22")}, type:'MENTOR'},
    //   {id:4, responsible:"Josefa AAA", areas:[
    //     {areaName: 'PROGRAMACION', yearsOfExperience: 3, priority: 'TOP'},
    //     {areaName: 'GAME DESIGN', yearsOfExperience: 3, priority: 'TOP'},
    //   ], status:"CONFIRMADO", time:{inicio:new Date("2022-05-31T19:30"), fin:new Date("2022-05-31T23:22")}, type:'MENTOR'},
    // ]
    // static type: string = 'MENTOR';
    // console.log('M',this.event.inicio, this.mentorsAvailables, this.mentorsPending);
  }
  
  setEventDates() {
    // const today = new Date();
    // const month = today.getMonth();
    // const year = today.getFullYear();
    this.eventDates = new FormGroup({
      start: new FormControl(this.currEdition?.dateStart),
      end: new FormControl(this.currEdition?.dateEnd),
    });
  }

  getMentors() {
    if(this.currEdition !== undefined && this.currEdition.id !== undefined) {
      this.mentorsService
        .getByEdition(this.currEdition.id)
        .subscribe((_mentors: MentorEd[]) => (
          _mentors.forEach((m: MentorEd) => {
            this.mentorNames.push(m.nombres + ' ' + m.apellidos);
            if (m.availabilities === undefined || m.availabilities.length === 0) {
              if (this.ugs.isOrg) this.mentorsPending.push( m );
            } else {
              m.availabilities.forEach(t => {
                // this.mentorsAvailables.push( this.mToMTime(m, t) );
                console.log('M av b', m,t);
                this.mentorsAvailables.push( {m: m, t: t} );
                console.log('M av a', this.mentorsAvailables);
              });
            }
          })
        ));
    }
  }

  mToMTime(mentor: MentorEd, av: MentorAvailab) {
    // return ItemTime.toItemTime({m: mentor, t: av}, this.currEdition?.dateStart);
    // if (av !== undefined) {
      // if( this.currEdition )
      // return {
      //   id:mentor.mentorId ? mentor.mentorId : 0,
      //   responsible:mentor.nombres + ' ' + mentor.apellidos,
      //   areas:mentor.areas ? mentor.areas : [],
      //   status:mentor.status,
      //   time:{
      //     inicio:av.dateStart ? av.dateStart : new Date(),
      //     fin:av.dateEnd ? av.dateEnd : new Date()
      //   },
      //   type:'MENTOR'
      // };
    // }
    // return new ItemTime(undefined, this.currEdition?.dateStart);
  }

  getByFname(event: any) {
    this.nameFiltered = event.target.value;
    console.log('M gbf',this.nameFiltered);
  }

  private _filter(name: string): string[] {
    const filterValue = name.toLowerCase();
    return this.mentorNames.filter(option => option.toLowerCase().includes(filterValue));
  }

}

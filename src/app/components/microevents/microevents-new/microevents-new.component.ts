import { map, Observable, startWith } from 'rxjs';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { ActivatedRoute, Router } from '@angular/router';
import { Status } from 'src/app/common/status';
import { Validators, FormControl } from '@angular/forms';
import { MicroEvento } from 'src/app/models/microevento.model';
import { Location } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MicroeventsService } from 'src/app/services/microevents.service';
import { User } from 'src/app/models/user.model';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-microevents-new',
  templateUrl: './microevents-new.component.html',
  styleUrls: ['./microevents-new.component.css']
})
export class MicroeventsNewComponent implements OnInit {

  type!: 'CHARLA'|'TALLER';
  title = this.type === "CHARLA"? "Nueva Charla" : "Nuevo Taller";
  @Input() mevent: MicroEvento = new MicroEvento();
  
  //Organizadores Asignados
  separatorKeysCodes: number[] = [ENTER, COMMA];
  orgCtrl = new FormControl('');
  filteredOrgs?: Observable<User[]>;
  orgs: User[] = [];
  allOrgs: User[] = [];
  @ViewChild('orgInput') orgInput!: ElementRef<HTMLInputElement>;


  //Validation inputs
  textReq = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]);

  states = Object.keys(Status.status);

  constructor(private location: Location,
    private microeventsService: MicroeventsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    //Tipo
    this.route.queryParams
      .subscribe(params => {
        this.type = params['type'];
        this.updateTitle();
      }
    );
    this.mevent.tipo = this.type;
    //Asignados
    this.getAsignados();
    this.filteredOrgs = this.orgCtrl.valueChanges.pipe(
      startWith(null),
      map((org: User) => (org ? this._filter(org) : this.allOrgs.slice())),
    );
  }
  
  //Update tipo
  updateTitle() {
    console.log(this.type);
    this.title = this.type === "CHARLA"? "Nueva Charla" : "Nuevo Taller";
  }

  //Asignados
  getAsignados() {
    this.microeventsService.getOrgs()
        .subscribe((_orgs: User[]) => (
          this.allOrgs = _orgs
        ));
  }
  add(event: MatChipInputEvent): void {
    const value = this.orgs.filter( (o) => {return o.id === parseInt(event.value)})[0];
    // Add our fruit
    if (value) { this.orgs.push(value); }
    // Clear the input value
    event.chipInput!.clear();
    this.orgCtrl.setValue(null);
  }
  remove(fruit: User): void {
    const index = this.orgs.indexOf(fruit);
    if (index >= 0) { this.orgs.splice(index, 1); }
  }
  selected(event: MatAutocompleteSelectedEvent): void {
    const value = this.orgs.filter( (o) => {return o.id === parseInt(event.option.viewValue)})[0];
    this.orgs.push(value);
    this.orgInput.nativeElement.value = '';
    this.orgCtrl.setValue(null);
  }
  private _filter(value: User): User[] {
    const filterValue = value.nombres?.toLowerCase()+'';
    return this.allOrgs.filter(fruit => fruit.nombres?.toLowerCase().includes(filterValue));
  }

  //Enlaces 
  addLink(){
    this.mevent.enlaces.push('');
  }
  removeLink(enlace : string) {
    console.log(this.mevent.enlaces, enlace);
    this.mevent.enlaces = this.mevent.enlaces.filter(e => {return e!==enlace});
  }
  
  onBack() { this.location.back(); }

  save() {
    console.log(this.mevent);
    this.microeventsService.create(this.mevent)
      .subscribe((m: MicroEvento) => (
        this.router.navigate( ['../'], { relativeTo: this.route } )
      ));
    // this.edition.id
  }
}

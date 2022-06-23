import { Time } from './../../common/time';
import { MicroeventsService } from './../../services/microevents.service';
import { FormBuilder, FormControl } from '@angular/forms';
import { UserGlobalService } from './../../services/user-global.service';
import { MicroEvento } from './../../models/microevento.model';
import { FormGroup } from '@angular/forms';
import { Edition } from './../../models/edition.model';
import { Component, OnInit, Injectable } from '@angular/core';
import {
  MatDateRangeSelectionStrategy,
  DateRange,
  MAT_DATE_RANGE_SELECTION_STRATEGY,
} from '@angular/material/datepicker';
import { DateAdapter } from '@angular/material/core';

@Injectable()
export class FiveDayRangeSelectionStrategy<D> implements MatDateRangeSelectionStrategy<D> {
  constructor(private _dateAdapter: DateAdapter<D>) {}

  selectionFinished(date: D | null): DateRange<D> {
    return this._createFiveDayRange(date);
  }

  createPreview(activeDate: D | null): DateRange<D> {
    return this._createFiveDayRange(activeDate);
  }

  private _createFiveDayRange(date: D | null): DateRange<D> {
    if (date) {
      const start = this._dateAdapter.addCalendarDays(date, -2);
      const end = this._dateAdapter.addCalendarDays(date, 2);
      return new DateRange<D>(start, end);
    }

    return new DateRange<D>(null, null);
  }
}

@Component({
  selector: 'app-microevents',
  templateUrl: './microevents.component.html',
  styleUrls: ['./microevents.component.css'],
  providers: [
    {
      provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
      useClass: FiveDayRangeSelectionStrategy,
    },
  ],
})
export class MicroeventsComponent implements OnInit {
  title = "Charlas y Talleres";
  currEdition: Edition = {id:0};
  weekForm: FormGroup = new FormGroup({});
  week = {dateStart: new Date(), dateEnd: new Date()};
  eventsPending: MicroEvento[] = [];
  eventsAvailables: MicroEvento[] = [];
  editable: boolean = false;
  // types = ['CHARLA','TALLER'];
  checked: boolean[] = [];
  typesFilter = [
    { label: 'CHARLA', checked: true },
    { label: 'TALLER', checked: true },
  ];

  constructor(
    private ugs: UserGlobalService,
    private microeventsService: MicroeventsService
  ) {
  }

  ngOnInit(): void {
    this.editable = this.ugs.isOrg;
    this.currEdition = JSON.parse(localStorage.getItem("currEdition")??"");
    let w = Time.getSemana(new Date());
    this.week = { dateStart: this.currEdition.dateStart??w.start, dateEnd: this.currEdition.dateEnd??w.end };
    this.setEventDates();
    this.getEvents();
    console.log('Mc F',this.week);
    // this.types.value.CHARLA?'CHARLA';
  }

  setEventDates() {
    this.weekForm = new FormGroup({
      start: new FormControl(this.week.dateStart),
      end: new FormControl(this.week.dateEnd),
    });
  }

  getEvents() {
    if(this.currEdition !== undefined && this.currEdition.id !== undefined) {
      this.microeventsService
        .getByEdition(this.currEdition.id)
        .subscribe((_mentors: MicroEvento[]) => (
          _mentors.forEach((m: MicroEvento) => {
            if (m.inicio === undefined || m.fin === undefined) {
              if (this.ugs.isOrg) this.eventsPending.push( m );
            } else {
              if (this.ugs.isOrg) this.eventsPending.push( m );
              this.eventsAvailables.push( m );
            }
            console.log('Mc av b', m, this.eventsAvailables, this.eventsPending);
          })
          // this.eventsPending += this.eventsAvailables;
        ));
    }
  }

  get selectedOptions() { // right now: ['1','3']
    return this.typesFilter
              .filter(opt => opt.checked)
              .map(opt => opt.label)
  }

  // updateChecked(option, event) {
  //   this.checked[option]=event; // or `event.target.value` not sure what this event looks like
  // }
  addEvent(event:any) {
    console.log('Mc ae',event);
  }
  
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };
}

import { UserGlobalService } from './services/user-global.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { GameAddComponent } from './components/groups/game-add/game-add.component';
import { CardGameComponent } from './components/components/card-game/card-game.component';

import { MentorsComponent, MentorsListComponent, 
    MentorsAvailabEditComponent, MentorsNewComponent, MentorsSearchComponent,
    MentorsDetailSmComponent } from './components/mentors';
import { 
  GroupAddComponent, GroupDetailsComponent, 
  GroupsListComponent, GroupsComponent 
} from './components/groups';

// import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';

import { MatMenuModule } from '@angular/material/menu';
import { PastEditionsComponent } from './components/past-editions/past-editions.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { TimelineCardComponent } from './components/timeline/timeline-card/timeline-card.component';
import { MicroeventsComponent } from './components/microevents/microevents.component';
import { MicroeventsDetailSmComponent } from './components/microevents/microevents-detail-sm/microevents-detail-sm.component';
import { MicroeventsListComponent } from './components/microevents/microevents-list/microevents-list.component';
import { HeaderComponent } from './components/header.component';
import { ItemPriorityComponent } from './components/elements/item-priority/item-priority.component';
import { MentorsTimeComponent } from './components/mentors/mentors-time/mentors-time.component';
import { MicroeventsNewComponent } from './components/microevents/microevents-new/microevents-new.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    GroupAddComponent,
    GroupDetailsComponent,
    GroupsComponent,
    SidenavComponent,
    GroupsListComponent,
    GameAddComponent,
    CardGameComponent,
    MentorsComponent,
    MentorsListComponent,
    MentorsAvailabEditComponent,
    MentorsNewComponent,
    MentorsSearchComponent,
    MentorsDetailSmComponent,
    PastEditionsComponent,
    TimelineComponent,
    TimelineCardComponent,
    MicroeventsComponent,
    MicroeventsDetailSmComponent,
    MicroeventsListComponent,
    HeaderComponent,
    ItemPriorityComponent,
    MentorsTimeComponent,
    MicroeventsNewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    MatChipsModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    HttpClientModule,
    MatGridListModule,
    MatCheckboxModule,
    MatDatepickerModule,
    // MatFormFieldModule,
    MatTabsModule,
    MatSelectModule,
    MatNativeDateModule,
    MatMenuModule,
    FormsModule,
    MatAutocompleteModule,
    MatTooltipModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
    {provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: true}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

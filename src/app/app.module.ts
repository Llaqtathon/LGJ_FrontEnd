import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

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

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { GroupAddComponent, GroupDetailsComponent, GroupsListComponent } from './components/groups';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { GameAddComponent } from './components/groups/game-add/game-add.component';
import { CardGameComponent } from './components/components/card-game/card-game.component';
=======
import { MentorsComponent, MentorsListComponent, MentorsTimelineComponent,
    MentorsAvailabEditComponent, MentorsNewComponent, MentorsSearchComponent,
    MentorsDetailSmComponent } from './components/mentors';
// import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';

import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    GroupAddComponent,
    GroupDetailsComponent,
    SidenavComponent,
    GroupsListComponent,
    GameAddComponent,
    CardGameComponent
    SidenavComponent,
    AddGroupComponent,
    GroupDetailsComponent,
    GroupsListComponent,
    MentorsComponent,
    MentorsListComponent,
    MentorsTimelineComponent,
    MentorsAvailabEditComponent,
    MentorsNewComponent,
    MentorsSearchComponent,
    MentorsDetailSmComponent,
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
    MatCheckboxModule
    MatDatepickerModule,
    // MatFormFieldModule,
    MatNativeDateModule,
    MatMenuModule,
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
    {provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: true}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { MentorsComponent } from './components/mentors/mentors.component';
import { Edition } from 'src/app/models/edition.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LGJ WebApp';
  selectedEdition: Edition = {id:0, name:'Lima Game Jam', dateStart:new Date(), dateEnd:new Date(),};

  onOutletLoaded(component: MentorsComponent) {
    // if (component instanceof MentorsComponent) {
    component.currEdition = this.selectedEdition;
    // }
  }
}

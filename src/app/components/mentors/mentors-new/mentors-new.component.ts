import { MentorUser } from './../../../models/mentor-user.model';
import { Edition } from './../../../models/edition.model';
import { ItemPriority } from './../../elements/item-priority/item-priority.component';
import { AreaUtils } from './../../../common/areas-utils';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MentorsService } from 'src/app/services/mentors.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mentors-new',
  templateUrl: './mentors-new.component.html',
  styleUrls: ['./mentors-new.component.css']
})
export class MentorsNewComponent implements OnInit {
  
  title = "Nuevo mentor";

  mentor: MentorUser = new MentorUser();
  edition: Edition = JSON.parse(localStorage.getItem("currEdition")??"");
  
  //Validation inputs
  textReq = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]);
  emailFormControl = new FormControl('', [Validators.email]);

  // AreasPriority
  lastPrior = 0;
  maxPriorities = 3;
  areas = Object.entries(AreaUtils.areaIcons).map( ([key, val]) => {
    return {label : key, icon : val+'', checked : false, priority:undefined, other: 0}
  });

  constructor(private location: Location,
    private mentorService: MentorsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    // this.mentor.phone = "";
    // this.mentor.photoUrl = 'https://pbs.twimg.com/media/FEwlAJxX0A4KrQa?format=png&name=small';
  }

  onBack() { this.location.back(); }

  setChecked(area:ItemPriority) {
    if (this.lastPrior < this.maxPriorities && area.checked===false) {
      area.checked = true;
      area.priority = ++this.lastPrior;
    } else if (area.checked) {
      area.checked = false;
      this.areas
        .filter(a => a.priority !== undefined && area.priority !== undefined && a.priority >= area.priority)
        .forEach(a => a.priority? a.priority-- : undefined);
      area.priority = undefined;
      this.lastPrior--;
    }
  }

  save() {
    this.mentorService.create(this.mentor)
      .subscribe((m: MentorUser) => (
        this.router.navigate(
          ['/availab', {id: m.mentorId, name: m.names + ' ' + m.lastNames}],
          { relativeTo: this.route.parent }
        )
      ));
    // this.edition.id
  }
}

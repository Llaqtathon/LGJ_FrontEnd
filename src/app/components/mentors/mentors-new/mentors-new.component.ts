import { AreaUtils } from './../../../common/areas-utils';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-mentors-new',
  templateUrl: './mentors-new.component.html',
  styleUrls: ['./mentors-new.component.css']
})
export class MentorsNewComponent implements OnInit {
  title = "Nuevo mentor";
  textReq = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]);
  emailFormControl = new FormControl('', [Validators.email]);
  lastPrior = 0;
  areas = Object.entries(AreaUtils.areaIcons).map( ([key, val]) => {
    return {label : key, icon : val+'', checked : false, priority:undefined}
  });

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  onBack() {
    this.location.back();
  }

  setChecked(area:{label : string, icon : string, checked : boolean, priority:number|undefined}) {
    area.checked = !area.checked
    if (area.checked) {
      area.priority = ++this.lastPrior;
    } else {
      area.priority = undefined;
      this.lastPrior--;
    }
  }
}

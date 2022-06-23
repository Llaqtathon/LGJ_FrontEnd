import { Sponsors } from './../../../models/sponsor.model';
import { Component, OnInit } from '@angular/core';
import {SponsorService} from 'src/app/services/sponsor.service';

@Component({
  selector: 'app-sponsors-list',
  templateUrl: './sponsors-list.component.html',
  styleUrls: ['./sponsors-list.component.css']
})
export class SponsorsListComponent implements OnInit {
  sponsors?: Sponsors[];
  title='Sponsors';

  constructor(private sponsorService:SponsorService) { }

  ngOnInit(): void {
    this.getSponsors();
  }

  getSponsors = (): void=>{
    this.sponsorService.getAll().subscribe({
      next: (data: Sponsors[]) => {
        this.sponsors = data;
      },
      error: (err)=>{ console.log(err)}
    })
  }

}

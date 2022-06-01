import { Sponsors } from './../../../models/sponsor.model';
import { Component, Input, OnInit } from '@angular/core';
import { SponsorService } from 'src/app/services/sponsor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { SponsorFormsService } from 'src/app/services/sponsor-form.service';

@Component({
  selector: 'app-add-sponsors',
  templateUrl: './add-sponsors.component.html',
  styleUrls: ['./add-sponsors.component.css']
})
export class AddSponsorsComponent implements OnInit {
  @Input () imageURL: string = initialImage;
  @Input() createdSponsors: Sponsors={
    nombre: '',
    logo:'', 
    descripcion:'',
  }
  uploadForm: FormGroup;

  constructor(
    public fb: FormBuilder, private sponsorService: SponsorService, 
    private route: ActivatedRoute, private router: Router, private service: SponsorFormsService){
      this.uploadForm=new FormGroup({
        nombre: new FormControl('', [
          Validators.required,
          Validators.minLength(1)
        ]),
        logo: new FormControl('', [
          Validators.required,
          Validators.minLength(1),
        ]),
        descripcion: new FormControl('', [
          Validators.required,
          Validators.minLength(1)
        ])
      })
    if (this.service._modified){
      this.uploadForm.setValue({
        nombre: this.service._state.nombre,
        logo: this.service._state.logo,
        descripcion: this.service._state.descripcion
      });
      this.createdSponsors=this.service._state;

      this.service._state={};
      this.service._modified=false;
    }
    }

  ngOnInit(): void {
    console.log(this.createdSponsors)
    if(this.router.url.includes('add')){

    } else{
      this.route.params.subscribe(params=>{
        this.getSponsor(params['id']);
      });
    }
  }

  getSponsor = (id: number): void => {
    this.sponsorService.get(id).subscribe({
      next: (data: Sponsors) => {
        this.createdSponsors = data;
        console.log(this.createdSponsors)
      },
      error: (err) => { console.log(err) }
    })
  }
  onSubmit() {
    if( this.uploadForm.valid ){
      const sponsor = {
        ...this.uploadForm.value, 
      };
  
      this.createdSponsors = sponsor;
      this.createSponsor();
      this.router.navigate(['/sponsors']);
    }
  }
  showPreview(event: Event) {
    const url = (event.target as HTMLInputElement).value;

    if (url.startsWith('http')) {
      this.imageURL = url;
    } else {
      this.imageURL = initialImage;
    }
  }
  createSponsor() {
    this.sponsorService.create(this.createdSponsors).subscribe({
      next: (data: Sponsors) => {
        console.log(data)
      },
      error: (err) => { console.log(err) }
    })
  }
}
const initialImage="https://www.google.com/url?sa=i&url=https%3A%2F%2Fcamikids.com%2Fplaceholder-png%2F&psig=AOvVaw0zAwrQzs1BY67QFeiYdolV&ust=1654125004579000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNDe4f7tivgCFQAAAAAdAAAAABAX";

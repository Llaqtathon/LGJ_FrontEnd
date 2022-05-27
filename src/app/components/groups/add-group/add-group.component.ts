import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})

export class AddGroupComponent implements OnInit {
  uploadForm: FormGroup;
  imageURL = initialImage;

  participants: {name: string; image: string }[] = [
    { name: 'Juan', image: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' },
    { name: 'Pedro', image: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' },
    { name: 'Maria', image: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' },
    { name: 'Danie', image: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' },
  ]


  constructor(public fb: FormBuilder) { 
    this.uploadForm = this.fb.group({
      image: [''],
      name: [''],
    });
  }

  ngOnInit(): void {
  }

  showPreview(event: Event) {
    const url = (event.target as HTMLInputElement).value;

    if (url.startsWith('http')) {
      this.imageURL = url;
    } else {
      this.imageURL = initialImage;
    }
  }


  removeParticipant(index: number) {
    this.participants.splice(index, 1);
  }

  onBack() {
    this.imageURL = initialImage;
  }
  
  submit() {
    console.log(this.uploadForm.value)
  }
}

const initialImage = "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876";

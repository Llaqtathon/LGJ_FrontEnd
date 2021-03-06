import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantsEditComponent } from './participants-edit.component';

describe('ParticipantsEditComponent', () => {
  let component: ParticipantsEditComponent;
  let fixture: ComponentFixture<ParticipantsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy(); 
  });
});
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorsAvailabEditComponent } from './mentors-availab-edit.component';

describe('MentorsAvailabEditComponent', () => {
  let component: MentorsAvailabEditComponent;
  let fixture: ComponentFixture<MentorsAvailabEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorsAvailabEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorsAvailabEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

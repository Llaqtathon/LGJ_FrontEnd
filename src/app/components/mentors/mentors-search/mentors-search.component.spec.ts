import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorsSearchComponent } from './mentors-search.component';

describe('MentorsSearchComponent', () => {
  let component: MentorsSearchComponent;
  let fixture: ComponentFixture<MentorsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorsSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

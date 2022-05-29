import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorsTimelineComponent } from './mentors-timeline.component';

describe('MentorsTimelineComponent', () => {
  let component: MentorsTimelineComponent;
  let fixture: ComponentFixture<MentorsTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorsTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorsTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

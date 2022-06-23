import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorsTimeComponent } from './mentors-time.component';

describe('MentorsTimeComponent', () => {
  let component: MentorsTimeComponent;
  let fixture: ComponentFixture<MentorsTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorsTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorsTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

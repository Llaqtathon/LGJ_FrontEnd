import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorsDetailSmComponent } from './mentors-detail-sm.component';

describe('MentorsDetailSmComponent', () => {
  let component: MentorsDetailSmComponent;
  let fixture: ComponentFixture<MentorsDetailSmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorsDetailSmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorsDetailSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

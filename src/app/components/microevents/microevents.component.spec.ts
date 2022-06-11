import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroeventsComponent } from './microevents.component';

describe('MicroeventsComponent', () => {
  let component: MicroeventsComponent;
  let fixture: ComponentFixture<MicroeventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicroeventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

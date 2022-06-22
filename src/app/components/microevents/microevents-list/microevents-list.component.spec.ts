import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroeventsListComponent } from './microevents-list.component';

describe('MicroeventsListComponent', () => {
  let component: MicroeventsListComponent;
  let fixture: ComponentFixture<MicroeventsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicroeventsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroeventsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

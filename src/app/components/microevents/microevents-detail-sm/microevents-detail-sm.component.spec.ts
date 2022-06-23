import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroeventsDetailSmComponent } from './microevents-detail-sm.component';

describe('MicroeventsDetailSmComponent', () => {
  let component: MicroeventsDetailSmComponent;
  let fixture: ComponentFixture<MicroeventsDetailSmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicroeventsDetailSmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroeventsDetailSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

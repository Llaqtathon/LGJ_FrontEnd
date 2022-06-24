import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroeventsNewComponent } from './microevents-new.component';

describe('MicroeventsNewComponent', () => {
  let component: MicroeventsNewComponent;
  let fixture: ComponentFixture<MicroeventsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicroeventsNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroeventsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

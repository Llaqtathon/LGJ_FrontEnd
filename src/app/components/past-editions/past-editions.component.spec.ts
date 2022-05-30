import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastEditionsComponent } from './past-editions.component';

describe('PastEditionsComponent', () => {
  let component: PastEditionsComponent;
  let fixture: ComponentFixture<PastEditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastEditionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastEditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

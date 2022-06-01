import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSponsorComponent } from './card-sponsor.component';

describe('CardSponsorComponent', () => {
  let component: CardSponsorComponent;
  let fixture: ComponentFixture<CardSponsorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSponsorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSponsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

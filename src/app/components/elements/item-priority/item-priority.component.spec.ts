import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPriorityComponent } from './item-priority.component';

describe('ItemPriorityComponent', () => {
  let component: ItemPriorityComponent;
  let fixture: ComponentFixture<ItemPriorityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemPriorityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

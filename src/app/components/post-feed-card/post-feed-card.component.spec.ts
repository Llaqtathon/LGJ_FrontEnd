import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFeedCardComponent } from './post-feed-card.component';

describe('PostFeedCardComponent', () => {
  let component: PostFeedCardComponent;
  let fixture: ComponentFixture<PostFeedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostFeedCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostFeedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

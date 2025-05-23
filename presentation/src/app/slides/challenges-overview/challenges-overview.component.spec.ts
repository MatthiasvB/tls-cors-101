import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengesOverviewComponent } from './challenges-overview.component';

describe('ChallengesOverviewComponent', () => {
  let component: ChallengesOverviewComponent;
  let fixture: ComponentFixture<ChallengesOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallengesOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChallengesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

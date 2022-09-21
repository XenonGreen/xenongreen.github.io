import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardinalLandingPageComponent } from './cardinal-landing-page.component';

describe('CardinalLandingPageComponent', () => {
  let component: CardinalLandingPageComponent;
  let fixture: ComponentFixture<CardinalLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardinalLandingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardinalLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComingSoonComponentComponent } from './coming-soon-component.component';

describe('ComingSoonComponentComponent', () => {
  let component: ComingSoonComponentComponent;
  let fixture: ComponentFixture<ComingSoonComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComingSoonComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComingSoonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

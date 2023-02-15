import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsalaComponent } from './cardsala.component';

describe('CardsalaComponent', () => {
  let component: CardsalaComponent;
  let fixture: ComponentFixture<CardsalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsalaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardpeliculaComponent } from './cardpelicula.component';

describe('CardpeliculaComponent', () => {
  let component: CardpeliculaComponent;
  let fixture: ComponentFixture<CardpeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardpeliculaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardpeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

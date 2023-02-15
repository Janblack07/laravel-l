import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarsalapeliculaComponent } from './ingresarsalapelicula.component';

describe('IngresarsalapeliculaComponent', () => {
  let component: IngresarsalapeliculaComponent;
  let fixture: ComponentFixture<IngresarsalapeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarsalapeliculaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresarsalapeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

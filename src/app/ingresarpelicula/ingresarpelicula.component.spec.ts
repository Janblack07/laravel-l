import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarpeliculaComponent } from './ingresarpelicula.component';

describe('IngresarpeliculaComponent', () => {
  let component: IngresarpeliculaComponent;
  let fixture: ComponentFixture<IngresarpeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarpeliculaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresarpeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

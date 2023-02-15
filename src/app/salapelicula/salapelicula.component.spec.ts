import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalapeliculaComponent } from './salapelicula.component';

describe('SalapeliculaComponent', () => {
  let component: SalapeliculaComponent;
  let fixture: ComponentFixture<SalapeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalapeliculaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalapeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

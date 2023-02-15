import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersalapeliculaComponent } from './versalapelicula.component';

describe('VersalapeliculaComponent', () => {
  let component: VersalapeliculaComponent;
  let fixture: ComponentFixture<VersalapeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersalapeliculaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VersalapeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

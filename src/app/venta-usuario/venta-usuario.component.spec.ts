import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaUsuarioComponent } from './venta-usuario.component';

describe('VentaUsuarioComponent', () => {
  let component: VentaUsuarioComponent;
  let fixture: ComponentFixture<VentaUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentaUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

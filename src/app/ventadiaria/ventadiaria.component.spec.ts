import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentadiariaComponent } from './ventadiaria.component';

describe('VentadiariaComponent', () => {
  let component: VentadiariaComponent;
  let fixture: ComponentFixture<VentadiariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentadiariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentadiariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerboletoComponent } from './verboleto.component';

describe('VerboletoComponent', () => {
  let component: VerboletoComponent;
  let fixture: ComponentFixture<VerboletoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerboletoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerboletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearboletoComponent } from './crearboleto.component';

describe('CrearboletoComponent', () => {
  let component: CrearboletoComponent;
  let fixture: ComponentFixture<CrearboletoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearboletoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearboletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

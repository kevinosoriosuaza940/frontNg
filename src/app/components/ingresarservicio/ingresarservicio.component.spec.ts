import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarservicioComponent } from './ingresarservicio.component';

describe('IngresarservicioComponent', () => {
  let component: IngresarservicioComponent;
  let fixture: ComponentFixture<IngresarservicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarservicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarservicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

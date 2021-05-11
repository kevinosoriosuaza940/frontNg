import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarhorasComponent } from './consultarhoras.component';

describe('ConsultarhorasComponent', () => {
  let component: ConsultarhorasComponent;
  let fixture: ComponentFixture<ConsultarhorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarhorasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarhorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariopruebaComponent } from './formularioprueba.component';

describe('FormulariopruebaComponent', () => {
  let component: FormulariopruebaComponent;
  let fixture: ComponentFixture<FormulariopruebaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulariopruebaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariopruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

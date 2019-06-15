import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariodataComponent } from './formulariodata.component';

describe('FormulariodataComponent', () => {
  let component: FormulariodataComponent;
  let fixture: ComponentFixture<FormulariodataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulariodataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariodataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

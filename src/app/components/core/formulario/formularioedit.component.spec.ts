import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioeditComponent } from './formularioedit.component';

describe('FormularioeditComponent', () => {
  let component: FormularioeditComponent;
  let fixture: ComponentFixture<FormularioeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

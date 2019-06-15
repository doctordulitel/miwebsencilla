import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Jumbo2Component } from './jumbo2.component';

describe('Jumbo2Component', () => {
  let component: Jumbo2Component;
  let fixture: ComponentFixture<Jumbo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Jumbo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Jumbo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

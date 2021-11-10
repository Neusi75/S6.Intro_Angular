/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EscenaComponent } from './Escena.component';

describe('EscenaComponent', () => {
  let component: EscenaComponent;
  let fixture: ComponentFixture<EscenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

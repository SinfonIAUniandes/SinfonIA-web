/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TDP2023Component } from './TDP2023.component';

describe('TDP2023Component', () => {
  let component: TDP2023Component;
  let fixture: ComponentFixture<TDP2023Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TDP2023Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TDP2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

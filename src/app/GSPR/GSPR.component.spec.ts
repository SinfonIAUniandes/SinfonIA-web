/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GSPRComponent } from './GSPR.component';

describe('GSPRComponent', () => {
  let component: GSPRComponent;
  let fixture: ComponentFixture<GSPRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GSPRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GSPRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

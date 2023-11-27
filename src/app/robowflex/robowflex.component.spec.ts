/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RobowflexComponent } from './robowflex.component';

describe('RobowflexComponent', () => {
  let component: RobowflexComponent;
  let fixture: ComponentFixture<RobowflexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobowflexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobowflexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

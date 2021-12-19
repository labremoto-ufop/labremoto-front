import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExperimentoComponent } from './experimento.component';

describe('ExperimentoComponent', () => {
  let component: ExperimentoComponent;
  let fixture: ComponentFixture<ExperimentoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
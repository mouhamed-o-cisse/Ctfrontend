import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichierPatientComponent } from './fichier-patient.component';

describe('FichierPatientComponent', () => {
  let component: FichierPatientComponent;
  let fixture: ComponentFixture<FichierPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichierPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichierPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

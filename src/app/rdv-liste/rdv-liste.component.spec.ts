import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvListeComponent } from './rdv-liste.component';

describe('RdvListeComponent', () => {
  let component: RdvListeComponent;
  let fixture: ComponentFixture<RdvListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdvListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdvListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

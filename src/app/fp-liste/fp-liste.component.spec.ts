import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FpListeComponent } from './fp-liste.component';

describe('FpListeComponent', () => {
  let component: FpListeComponent;
  let fixture: ComponentFixture<FpListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FpListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FpListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NosSoinsComponent } from './nos-soins.component';

describe('NosSoinsComponent', () => {
  let component: NosSoinsComponent;
  let fixture: ComponentFixture<NosSoinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NosSoinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NosSoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

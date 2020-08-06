import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFpComponent } from './update-fp.component';

describe('UpdateFpComponent', () => {
  let component: UpdateFpComponent;
  let fixture: ComponentFixture<UpdateFpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

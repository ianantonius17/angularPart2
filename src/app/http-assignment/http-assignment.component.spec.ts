import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpAssignmentComponent } from './http-assignment.component';

describe('HttpAssignmentComponent', () => {
  let component: HttpAssignmentComponent;
  let fixture: ComponentFixture<HttpAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

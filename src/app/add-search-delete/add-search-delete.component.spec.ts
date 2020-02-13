import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSearchDeleteComponent } from './add-search-delete.component';

describe('AddSearchDeleteComponent', () => {
  let component: AddSearchDeleteComponent;
  let fixture: ComponentFixture<AddSearchDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSearchDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSearchDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

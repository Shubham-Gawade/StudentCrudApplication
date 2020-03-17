import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentUpdateFormComponent } from './student-update-form.component';

describe('StudentUpdateFormComponent', () => {
  let component: StudentUpdateFormComponent;
  let fixture: ComponentFixture<StudentUpdateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentUpdateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

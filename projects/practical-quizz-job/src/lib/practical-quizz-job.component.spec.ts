import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticalQuizzJobComponent } from './practical-quizz-job.component';

describe('PracticalQuizzJobComponent', () => {
  let component: PracticalQuizzJobComponent;
  let fixture: ComponentFixture<PracticalQuizzJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticalQuizzJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticalQuizzJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

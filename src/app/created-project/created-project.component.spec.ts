import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedProjectComponent } from './created-project.component';

describe('CreatedProjectComponent', () => {
  let component: CreatedProjectComponent;
  let fixture: ComponentFixture<CreatedProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatedProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectUpsertComponent } from './project-upsert.component';

describe('ProjectUpsertComponent', () => {
  let component: ProjectUpsertComponent;
  let fixture: ComponentFixture<ProjectUpsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectUpsertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectUpsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

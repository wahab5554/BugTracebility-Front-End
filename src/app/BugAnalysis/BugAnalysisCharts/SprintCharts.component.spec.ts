import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintChartsComponent } from './SprintCharts.component';

describe('BugComponent', () => {
  let component: SprintChartsComponent;
  let fixture: ComponentFixture<SprintChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprintChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprintChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

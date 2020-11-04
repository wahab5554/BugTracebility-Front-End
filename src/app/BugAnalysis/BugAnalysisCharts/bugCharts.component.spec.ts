import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugChartsComponent } from './bugCharts.component';

describe('BugComponent', () => {
  let component: BugChartsComponent;
  let fixture: ComponentFixture<BugChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
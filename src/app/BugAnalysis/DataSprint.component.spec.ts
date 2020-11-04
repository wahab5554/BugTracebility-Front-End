import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSettingsComponent } from './DataSettings.component';

describe('DataSettingsComponent', () => {
  let component: DataSettingsComponent;
  let fixture: ComponentFixture<DataSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleSettingsComponent } from './RoleSettings.component';

describe('RoleSettingsComponent', () => {
  let component: RoleSettingsComponent;
  let fixture: ComponentFixture<RoleSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

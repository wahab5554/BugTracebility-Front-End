import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceUtilComponent } from './resource-util.component';

describe('ResourceUtilComponent', () => {
  let component: ResourceUtilComponent;
  let fixture: ComponentFixture<ResourceUtilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceUtilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

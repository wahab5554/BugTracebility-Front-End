import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BddComponent } from './BddCovered.component';

describe('BugComponent', () => {
  let component: BddComponent;
  let fixture: ComponentFixture<BddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

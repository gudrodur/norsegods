import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GodsDetailComponent } from './gods-detail.component';

describe('GodsDetailComponent', () => {
  let component: GodsDetailComponent;
  let fixture: ComponentFixture<GodsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GodsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GodsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

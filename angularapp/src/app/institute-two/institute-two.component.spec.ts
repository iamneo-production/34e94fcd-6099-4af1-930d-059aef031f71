import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteTwoComponent } from './institute-two.component';

describe('InstituteTwoComponent', () => {
  let component: InstituteTwoComponent;
  let fixture: ComponentFixture<InstituteTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstituteTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstituteTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

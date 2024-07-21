import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighprofileComponent } from './highprofile.component';

describe('HighprofileComponent', () => {
  let component: HighprofileComponent;
  let fixture: ComponentFixture<HighprofileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighprofileComponent]
    });
    fixture = TestBed.createComponent(HighprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

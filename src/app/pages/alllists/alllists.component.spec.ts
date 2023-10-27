import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlllistsComponent } from './alllists.component';

describe('AlllistsComponent', () => {
  let component: AlllistsComponent;
  let fixture: ComponentFixture<AlllistsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlllistsComponent]
    });
    fixture = TestBed.createComponent(AlllistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

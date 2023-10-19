import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LightsPage } from './lights.page';

describe('LightsPage', () => {
  let component: LightsPage;
  let fixture: ComponentFixture<LightsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LightsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

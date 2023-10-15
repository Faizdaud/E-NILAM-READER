import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StartSessionPage } from './start-session.page';

describe('StartSessionPage', () => {
  let component: StartSessionPage;
  let fixture: ComponentFixture<StartSessionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StartSessionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

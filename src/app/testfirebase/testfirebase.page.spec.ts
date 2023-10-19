import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestfirebasePage } from './testfirebase.page';

describe('TestfirebasePage', () => {
  let component: TestfirebasePage;
  let fixture: ComponentFixture<TestfirebasePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TestfirebasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterBookPage } from './register-book.page';

describe('RegisterBookPage', () => {
  let component: RegisterBookPage;
  let fixture: ComponentFixture<RegisterBookPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegisterBookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

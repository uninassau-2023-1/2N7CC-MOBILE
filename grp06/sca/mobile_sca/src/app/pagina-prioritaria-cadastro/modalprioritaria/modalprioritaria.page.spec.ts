import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalprioritariaPage } from './modalprioritaria.page';

describe('ModalprioritariaPage', () => {
  let component: ModalprioritariaPage;
  let fixture: ComponentFixture<ModalprioritariaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModalprioritariaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

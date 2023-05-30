import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalgeralPage } from './modalgeral.page';

describe('ModalgeralPage', () => {
  let component: ModalgeralPage;
  let fixture: ComponentFixture<ModalgeralPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModalgeralPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

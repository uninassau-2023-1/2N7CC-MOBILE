import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalexamePage } from './modalexame.page';

describe('ModalexamePage', () => {
  let component: ModalexamePage;
  let fixture: ComponentFixture<ModalexamePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModalexamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

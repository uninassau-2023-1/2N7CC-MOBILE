import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExamesPage } from './exames.page';

describe('ExamesPage', () => {
  let component: ExamesPage;
  let fixture: ComponentFixture<ExamesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ExamesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

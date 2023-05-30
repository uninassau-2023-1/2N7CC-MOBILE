import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeraisPage } from './gerais.page';

describe('GeraisPage', () => {
  let component: GeraisPage;
  let fixture: ComponentFixture<GeraisPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GeraisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

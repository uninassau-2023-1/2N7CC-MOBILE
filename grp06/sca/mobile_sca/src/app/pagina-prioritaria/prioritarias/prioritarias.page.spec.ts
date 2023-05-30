import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrioritariasPage } from './prioritarias.page';

describe('PrioritariasPage', () => {
  let component: PrioritariasPage;
  let fixture: ComponentFixture<PrioritariasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PrioritariasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

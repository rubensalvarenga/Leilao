import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtigonewComponent } from './artigonew.component';

describe('ArtigonewComponent', () => {
  let component: ArtigonewComponent;
  let fixture: ComponentFixture<ArtigonewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtigonewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtigonewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

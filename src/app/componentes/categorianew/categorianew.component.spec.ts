import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorianewComponent } from './categorianew.component';

describe('CategorianewComponent', () => {
  let component: CategorianewComponent;
  let fixture: ComponentFixture<CategorianewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorianewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorianewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

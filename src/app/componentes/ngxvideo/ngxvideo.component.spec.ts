import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxvideoComponent } from './ngxvideo.component';

describe('NgxvideoComponent', () => {
  let component: NgxvideoComponent;
  let fixture: ComponentFixture<NgxvideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxvideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

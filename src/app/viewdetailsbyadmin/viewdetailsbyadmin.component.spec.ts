import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdetailsbyadminComponent } from './viewdetailsbyadmin.component';

describe('ViewdetailsbyadminComponent', () => {
  let component: ViewdetailsbyadminComponent;
  let fixture: ComponentFixture<ViewdetailsbyadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewdetailsbyadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdetailsbyadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

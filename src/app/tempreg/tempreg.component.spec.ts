import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempregComponent } from './tempreg.component';

describe('TempregComponent', () => {
  let component: TempregComponent;
  let fixture: ComponentFixture<TempregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempregComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

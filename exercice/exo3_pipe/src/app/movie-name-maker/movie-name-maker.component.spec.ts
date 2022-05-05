import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieNameMakerComponent } from './movie-name-maker.component';

describe('MovieNameMakerComponent', () => {
  let component: MovieNameMakerComponent;
  let fixture: ComponentFixture<MovieNameMakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieNameMakerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieNameMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

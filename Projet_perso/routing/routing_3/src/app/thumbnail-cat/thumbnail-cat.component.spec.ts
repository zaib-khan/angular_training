import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailCatComponent } from './thumbnail-cat.component';

describe('ThumbnailCatComponent', () => {
  let component: ThumbnailCatComponent;
  let fixture: ComponentFixture<ThumbnailCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThumbnailCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbnailCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

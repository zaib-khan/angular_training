import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubProfilComponent } from './github-profil.component';

describe('GithubProfilComponent', () => {
  let component: GithubProfilComponent;
  let fixture: ComponentFixture<GithubProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubProfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

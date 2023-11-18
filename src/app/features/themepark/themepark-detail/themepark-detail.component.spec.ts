import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeparkDetailComponent } from './themepark-detail.component';

describe('ThemeparkDetailComponent', () => {
  let component: ThemeparkDetailComponent;
  let fixture: ComponentFixture<ThemeparkDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThemeparkDetailComponent]
    });
    fixture = TestBed.createComponent(ThemeparkDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

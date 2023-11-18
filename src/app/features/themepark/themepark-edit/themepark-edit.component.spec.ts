import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeparkEditComponent } from './themepark-edit.component';

describe('ThemeparkEditComponent', () => {
  let component: ThemeparkEditComponent;
  let fixture: ComponentFixture<ThemeparkEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThemeparkEditComponent]
    });
    fixture = TestBed.createComponent(ThemeparkEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

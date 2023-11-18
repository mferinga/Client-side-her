import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeparkListComponent } from './themepark-list.component';

describe('ThemeparkListComponent', () => {
  let component: ThemeparkListComponent;
  let fixture: ComponentFixture<ThemeparkListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThemeparkListComponent]
    });
    fixture = TestBed.createComponent(ThemeparkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

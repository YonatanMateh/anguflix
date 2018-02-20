import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMoviesRowComponent } from './my-movies-row.component';

describe('MyMoviesRowComponent', () => {
  let component: MyMoviesRowComponent;
  let fixture: ComponentFixture<MyMoviesRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMoviesRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMoviesRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

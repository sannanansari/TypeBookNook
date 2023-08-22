import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookNookComponent } from './book-nook.component';

describe('BookNookComponent', () => {
  let component: BookNookComponent;
  let fixture: ComponentFixture<BookNookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookNookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookNookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

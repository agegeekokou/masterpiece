import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListPhysiciansComponent } from './page-list-physicians.component';

describe('PageListPhysiciansComponent', () => {
  let component: PageListPhysiciansComponent;
  let fixture: ComponentFixture<PageListPhysiciansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListPhysiciansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListPhysiciansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

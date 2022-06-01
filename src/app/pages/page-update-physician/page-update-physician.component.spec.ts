import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUpdatePhysicianComponent } from './page-update-physician.component';

describe('PageUpdatePhysicianComponent', () => {
  let component: PageUpdatePhysicianComponent;
  let fixture: ComponentFixture<PageUpdatePhysicianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageUpdatePhysicianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUpdatePhysicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

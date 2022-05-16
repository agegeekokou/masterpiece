import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCreatePhysicianComponent } from './page-create-physician.component';

describe('PageCreatePhysicianComponent', () => {
  let component: PageCreatePhysicianComponent;
  let fixture: ComponentFixture<PageCreatePhysicianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCreatePhysicianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCreatePhysicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

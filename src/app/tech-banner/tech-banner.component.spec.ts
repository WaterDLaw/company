import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechBannerComponent } from './tech-banner.component';

describe('TechBannerComponent', () => {
  let component: TechBannerComponent;
  let fixture: ComponentFixture<TechBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

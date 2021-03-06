import { TagOverviewComponent } from './tag-overview.component';
import {ComponentFixture} from '@angular/core/testing';

describe('TagOverviewComponent', () => {
  let component: TagOverviewComponent;
  let fixture: ComponentFixture<TagOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

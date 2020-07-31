import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoialMediaComponent } from './scoial-media.component';

describe('ScoialMediaComponent', () => {
  let component: ScoialMediaComponent;
  let fixture: ComponentFixture<ScoialMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoialMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

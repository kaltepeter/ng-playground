import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoToolbarComponent } from './photo-toolbar.component';

describe('PhotoToolbarComponent', () => {
  let component: PhotoToolbarComponent;
  let fixture: ComponentFixture<PhotoToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

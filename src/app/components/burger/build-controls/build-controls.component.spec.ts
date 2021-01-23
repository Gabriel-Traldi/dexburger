import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildControlsComponent } from './build-controls.component';

describe('BuildControlsComponent', () => {
  let component: BuildControlsComponent;
  let fixture: ComponentFixture<BuildControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildControlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

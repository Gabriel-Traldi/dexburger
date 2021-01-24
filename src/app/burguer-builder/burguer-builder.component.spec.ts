import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurguerBuilderComponent } from './burguer-builder.component';

describe('BurguerBuilderComponent', () => {
  let component: BurguerBuilderComponent;
  let fixture: ComponentFixture<BurguerBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurguerBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurguerBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

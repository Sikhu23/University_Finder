import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColglistComponent } from './colglist.component';

describe('ColglistComponent', () => {
  let component: ColglistComponent;
  let fixture: ComponentFixture<ColglistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColglistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

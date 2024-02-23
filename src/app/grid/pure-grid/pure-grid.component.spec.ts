import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PureGridComponent } from './pure-grid.component';

describe('PureGridComponent', () => {
  let component: PureGridComponent;
  let fixture: ComponentFixture<PureGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PureGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PureGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

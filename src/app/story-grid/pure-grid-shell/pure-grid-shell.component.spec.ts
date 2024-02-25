import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PureGridShellComponent } from './pure-grid-shell.component';

describe('PureGridShellComponent', () => {
  let component: PureGridShellComponent;
  let fixture: ComponentFixture<PureGridShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PureGridShellComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PureGridShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

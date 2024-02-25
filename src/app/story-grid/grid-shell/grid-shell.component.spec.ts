import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridShellComponent } from './grid-shell.component';

describe('GridShellComponent', () => {
  let component: GridShellComponent;
  let fixture: ComponentFixture<GridShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridShellComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GridShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

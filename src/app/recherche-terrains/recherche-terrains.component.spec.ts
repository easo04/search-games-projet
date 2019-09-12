import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheTerrainsComponent } from './recherche-terrains.component';

describe('RechercheTerrainsComponent', () => {
  let component: RechercheTerrainsComponent;
  let fixture: ComponentFixture<RechercheTerrainsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheTerrainsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheTerrainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

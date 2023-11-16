import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsJuegosComponent } from './details-juegos.component';

describe('DetailsJuegosComponent', () => {
  let component: DetailsJuegosComponent;
  let fixture: ComponentFixture<DetailsJuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsJuegosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsJuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

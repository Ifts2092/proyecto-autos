import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OficinaListadoComponent } from './oficina-listado.component';

describe('OficinaListadoComponent', () => {
  let component: OficinaListadoComponent;
  let fixture: ComponentFixture<OficinaListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OficinaListadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OficinaListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

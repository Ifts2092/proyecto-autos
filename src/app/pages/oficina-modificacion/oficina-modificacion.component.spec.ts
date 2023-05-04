import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OficinaModificacionComponent } from './oficina-modificacion.component';

describe('OficinaModificacionComponent', () => {
  let component: OficinaModificacionComponent;
  let fixture: ComponentFixture<OficinaModificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OficinaModificacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OficinaModificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesAltaComponent } from './clientes-alta.component';

describe('ClientesAltaComponent', () => {
  let component: ClientesAltaComponent;
  let fixture: ComponentFixture<ClientesAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesAltaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientesAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

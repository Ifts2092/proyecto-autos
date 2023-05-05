import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehiculosComponent } from './pages/vehiculos/vehiculos.component';
import { VehiculosEditComponent } from './pages/vehiculos-edit/vehiculos-edit.component';
import { ExampleComponent } from './pages/example/example.component';
import { LoginComponent } from './pages/login/login.component';
import { OficinaComponent } from './pages/oficina/oficina.component';
import { OficinaModificacionComponent } from './pages/oficina-modificacion/oficina-modificacion.component';
import { OficinaListadoComponent } from './pages/oficina-listado/oficina-listado.component';
import { ClientesAltaComponent } from './pages/clientes-alta/clientes-alta.component';
import { ClientesListadoComponent } from './pages/clientes-listado/clientes-listado.component';
import { ReservasComponent } from './pages/reservas/reservas.component';
import { ReservasEditComponent } from './pages/reservas-edit/reservas-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiculosComponent,
    VehiculosEditComponent,
    ExampleComponent,
    LoginComponent,
    OficinaComponent,
    OficinaModificacionComponent,
    OficinaListadoComponent,
    ClientesAltaComponent,
    ClientesListadoComponent,
    ReservasComponent,
    ReservasEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculosComponent } from './pages/vehiculos/vehiculos.component';
import { ExampleComponent } from './pages/example/example.component';
import { LoginComponent } from './pages/login/login.component';
import { VehiculosEditComponent } from './pages/vehiculos-edit/vehiculos-edit.component';
import { OficinaListadoComponent } from './pages/oficina-listado/oficina-listado.component';
import { OficinaComponent } from './pages/oficina-alta/oficina.component';
import { OficinaModificacionComponent } from './pages/oficina-modificacion/oficina-modificacion.component';
import { ClientesAltaComponent } from './pages/clientes-alta/clientes-alta.component';
import { ClientesListadoComponent } from './pages/clientes-listado/clientes-listado.component';
import { ReservasComponent } from './pages/reservas/reservas.component';
import { ReservasEditComponent } from './pages/reservas-edit/reservas-edit.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: ExampleComponent },
  { path: 'vehiculos-listado', component: VehiculosComponent },
  { path: 'vehiculo-alta', component: VehiculosEditComponent },
  { path: 'oficinas-listado', component: OficinaListadoComponent},
  { path: 'oficina-alta', component: OficinaComponent},
  { path: 'oficina-modificacion', component: OficinaModificacionComponent},
  { path: 'clientes-alta', component: ClientesAltaComponent},
  { path: 'clientes-listado', component: ClientesListadoComponent},
  { path: 'reservas-listado', component: ReservasComponent},
  { path: 'reserva-alta', component: ReservasEditComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculosComponent } from './pages/vehiculos/vehiculos.component';
import { ExampleComponent } from './pages/example/example.component';
import { LoginComponent } from './pages/login/login.component';
import { VehiculosEditComponent } from './pages/vehiculos-edit/vehiculos-edit.component';
import { OficinaListadoComponent } from './pages/oficina-listado/oficina-listado.component';
import { OficinaComponent } from './pages/oficina/oficina.component';
import { OficinaModificacionComponent } from './pages/oficina-modificacion/oficina-modificacion.component';
import { ClientesAltaComponent } from './pages/clientes-alta/clientes-alta.component';
import { ClientesListadoComponent } from './pages/clientes-listado/clientes-listado.component';

const routes: Routes = [
  { path: '', component: ExampleComponent },
  { path: 'login', component: LoginComponent },
  { path: 'vehiculos', component: VehiculosComponent },
  { path: 'nuevo-vehiculo', component: VehiculosEditComponent },
  { path: 'oficinas-listado', component: OficinaListadoComponent},
  { path: 'oficina-alta', component: OficinaComponent},
  { path: 'oficina-modificacion', component: OficinaModificacionComponent},
  { path: 'clientes-alta', component: ClientesAltaComponent},
  { path: 'clientes-listado', component: ClientesListadoComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

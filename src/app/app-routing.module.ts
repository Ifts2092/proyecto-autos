import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculosComponent } from './pages/vehiculos/vehiculos.component';
import { ExampleComponent } from './pages/example/example.component';
import { LoginComponent } from './pages/login/login.component';
import { VehiculosEditComponent } from './pages/vehiculos-edit/vehiculos-edit.component';
import { OficinaListadoComponent } from './pages/oficina-listado/oficina-listado.component';
import { OficinaComponent } from './pages/oficina/oficina.component';
import { OficinaModificacionComponent } from './pages/oficina-modificacion/oficina-modificacion.component';

const routes: Routes = [
  { path: '', component: ExampleComponent },
  { path: 'login', component: LoginComponent },
  { path: 'vehiculos', component: VehiculosComponent },
  { path: 'nuevo-vehiculo', component: VehiculosEditComponent },
  { path: 'oficinas-listado', component: OficinaListadoComponent},
  { path: 'oficina-alta', component: OficinaComponent},
  { path: 'oficina-modificacion', component: OficinaModificacionComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

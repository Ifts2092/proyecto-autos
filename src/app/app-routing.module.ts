import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculosComponent } from './pages/vehiculos/vehiculos.component';
import { ExampleComponent } from './pages/example/example.component';
import { LoginComponent } from './pages/login/login.component';
import { VehiculosEditComponent } from './pages/vehiculos-edit/vehiculos-edit.component';

const routes: Routes = [
  { path: '', component: ExampleComponent },
  { path: 'login', component: LoginComponent },
  { path: 'vehiculos', component: VehiculosComponent },
  { path: 'nuevo-vehiculo', component: VehiculosEditComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

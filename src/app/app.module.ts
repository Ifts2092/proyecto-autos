import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehiculosComponent } from './pages/vehiculos/vehiculos.component';
import { VehiculosEditComponent } from './pages/vehiculos-edit/vehiculos-edit.component';
import { ExampleComponent } from './pages/example/example.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiculosComponent,
    VehiculosEditComponent,
    ExampleComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

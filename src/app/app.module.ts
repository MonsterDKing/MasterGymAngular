import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './compartido/header/header.component';
import { SidebarComponent } from './compartido/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './compartido/breadcrumbs/breadcrumbs.component';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { ListadoComponent } from './paginas/listado/listado.component';
import { PagesComponent } from './paginas/pages.component';
import { LoginComponent } from './paginas/login/login.component';
import { NoPageFoundComponent } from './paginas/no-page-found/no-page-found.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonasService } from './Servicios/personas.service';
import { RegistrarClienteComponent } from './paginas/registrar-cliente/registrar-cliente.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ModificarClienteComponent } from './paginas/modificar-cliente/modificar-cliente.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { EntradaClientesComponent } from './paginas/entrada-clientes/entrada-clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    DashboardComponent,
    ListadoComponent,
    PagesComponent,
    LoginComponent,
    NoPageFoundComponent,
    RegistroComponent,
    RegistrarClienteComponent,
    ModificarClienteComponent,
    EntradaClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SmartTableModule
    ],
  providers: [
    PersonasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

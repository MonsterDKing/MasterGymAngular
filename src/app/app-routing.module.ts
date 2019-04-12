import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { ListadoComponent } from './paginas/listado/listado.component';
import { PagesComponent } from './paginas/pages.component';
import { NoPageFoundComponent } from './paginas/no-page-found/no-page-found.component';
import { LoginComponent } from './paginas/login/login.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { RegistrarClienteComponent } from './paginas/registrar-cliente/registrar-cliente.component';
import { ModificarClienteComponent } from './paginas/modificar-cliente/modificar-cliente.component';
import { EntradaClientesComponent } from './paginas/entrada-clientes/entrada-clientes.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children:[
      {path: 'dashboard', component: DashboardComponent},
      {path: 'listado', component: ListadoComponent},
      {path: 'registrarCliente', component: RegistrarClienteComponent},
      {path: 'modificarCliente/:idCliente', component: ModificarClienteComponent},
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'entradaClientes', component: EntradaClientesComponent},
  {path: '**', component: NoPageFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

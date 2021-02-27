import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import {NosServicesComponent} from './nos-services/nos-services.component';
import {AccueilComponent} from './accueil/accueil.component';
import {ServiceGestionBusComponent} from './nos-services/service-gestion-bus/service-gestion-bus.component';
import {ServiceMarchePublicComponent} from './nos-services/service-marche-public/service-marche-public.component';
import {ServiceTicketingComponent} from './nos-services/service-ticketing/service-ticketing.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'nos-services', component: NosServicesComponent },
  {path: 'service-marche-public', component: ServiceMarchePublicComponent},
  {path: 'service-ticketing', component: ServiceTicketingComponent},
  {path: 'service-gestion-bus', component: ServiceGestionBusComponent},
  { path: '', redirectTo: '/accueil', pathMatch: 'full'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

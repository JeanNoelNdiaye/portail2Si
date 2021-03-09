import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AssistanceComponent} from './assistance/assistance.component';
import {NosServicesComponent} from './nos-services/nos-services.component';
import {AccueilComponent} from './accueil/accueil.component';
import {ServiceGestionBusComponent} from './nos-services/service-gestion-bus/service-gestion-bus.component';
import {ServiceMarchePublicComponent} from './nos-services/service-marche-public/service-marche-public.component';
import {ServiceTicketingComponent} from './nos-services/service-ticketing/service-ticketing.component';
import {NospartenairesComponent} from './apropos/nospartenaires/nospartenaires.component';
import {AproposComponent} from './apropos/apropos.component';
import {LesreferencesComponent} from './apropos/lesreferences/lesreferences.component';
import {NosproduitsComponent} from './apropos/nosproduits/nosproduits.component';
import {PrixdistinctionsComponent} from './apropos/prixdistinctions/prixdistinctions.component';




const routes: Routes = [
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full'
  },
  {
    path: 'accueil',
    component: AccueilComponent
  },
  {
    path: 'assistance',
    component: AssistanceComponent
  },
    {
      path: 'nos-services',
      component: NosServicesComponent,
    },
      {
        path: 'service-ticketing',
        component: ServiceTicketingComponent,
      },
      {
        path: 'service-gestion-bus',
        component: ServiceGestionBusComponent,
      },
    {
      path: 'service-marche-public',
      component: ServiceMarchePublicComponent,
    },
    {
      path: 'nospartenaires',
      component: NospartenairesComponent,
    },
    {
      path: 'apropos',
      component: AproposComponent,
    },
    {
      path: 'lesreferences',
      component: LesreferencesComponent,
    },
    {
      path: 'nospartenaires',
      component: NospartenairesComponent,
    },
    {
      path: 'nosproduits',
      component: NosproduitsComponent,
    },
    {
      path: 'prixdistinctions',
      component: PrixdistinctionsComponent,
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

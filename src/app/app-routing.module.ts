import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import {NosServicesComponent} from './nos-services/nos-services.component';
import {AccueilComponent} from './accueil/accueil.component';
import {ServiceEtransportComponent} from './nos-services/service-etransport/service-etransport.component';
import {ServiceEsigmapComponent} from './nos-services/service-esigmap/service-esigmap.component';
import {ServiceEticketingComponent} from './nos-services/service-eticketing/service-eticketing.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'nos-services', component: NosServicesComponent },
  {path: 'service-esigmap', component: ServiceEsigmapComponent},
  {path: 'service-eticketing', component: ServiceEticketingComponent},
  {path: 'service-etransport', component: ServiceEtransportComponent},
  { path: '', redirectTo: '/accueil', pathMatch: 'full'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

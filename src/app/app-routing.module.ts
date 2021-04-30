import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AssistanceComponent} from './assistance/assistance.component';
import {NosServicesComponent} from './nos-services/nos-services.component';
import {AccueilComponent} from './accueil/accueil.component';
import {NospartenairesComponent} from './apropos/nospartenaires/nospartenaires.component';
import {AproposComponent} from './apropos/apropos.component';
import {LesreferencesComponent} from './apropos/lesreferences/lesreferences.component';
import {NosproduitsComponent} from './apropos/nosproduits/nosproduits.component';
import {PrixdistinctionsComponent} from './apropos/prixdistinctions/prixdistinctions.component';
import {ServiceEsigmapComponent} from './nos-services/service-esigmap/service-esigmap.component';
import {ServiceEticketingComponent} from './nos-services/service-eticketing/service-eticketing.component';
import {ServiceEtransportComponent} from './nos-services/service-etransport/service-etransport.component';
import {MessageVisiteurComponent} from './assistance/message-visiteur/message-visiteur.component';
import {RessourcesComponent} from "./ressources/ressources.component";
import {ProduitComponent} from "./administration/produit/produit.component";




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
    {path: 'service-esigmap', component: ServiceEsigmapComponent},
    {path: 'service-eticketing', component: ServiceEticketingComponent},
    {path: 'service-etransport', component: ServiceEtransportComponent},
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
    {
      path: 'message-visiteur',
      component: MessageVisiteurComponent,
    },
    {
      path: 'ressources',
      component: RessourcesComponent,
    },
    {
      path: 'produits',
      component: ProduitComponent,
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

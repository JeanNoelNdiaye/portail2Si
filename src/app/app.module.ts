import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssistanceComponent } from './assistance/assistance.component';
// @ts-ignore
import {HeaderComponent} from './layouts/header/header.component';
// @ts-ignore
import {FooterComponent} from './layouts/footer/footer.component';


import { NosServicesComponent } from './nos-services/nos-services.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ServiceMarchePublicComponent } from './nos-services/service-marche-public/service-marche-public.component';
import { ServiceTicketingComponent } from './nos-services/service-ticketing/service-ticketing.component';
import { ServiceGestionBusComponent } from './nos-services/service-gestion-bus/service-gestion-bus.component';
import { AproposComponent } from './apropos/apropos.component';
import { PrixdistinctionsComponent } from './apropos/prixdistinctions/prixdistinctions.component';
import { NosproduitsComponent } from './apropos/nosproduits/nosproduits.component';
import { NospartenairesComponent } from './apropos/nospartenaires/nospartenaires.component';
import { LesreferencesComponent } from './apropos/lesreferences/lesreferences.component';
import { MessageVisiteurComponent } from './assistance/message-visiteur/message-visiteur.component';
import {FormsModule} from '@angular/forms';
import { FAQComponent } from './assistance/faq/faq.component';
import { SupportTechniqueComponent } from './assistance/support-technique/support-technique.component';



@NgModule({
  declarations: [
    AppComponent,
    NosServicesComponent,
    AccueilComponent,
    ServiceMarchePublicComponent,
    ServiceTicketingComponent,
    ServiceGestionBusComponent,
    AssistanceComponent,
    AccueilComponent,
    HeaderComponent,
    FooterComponent,
    MessageVisiteurComponent,
    AproposComponent,
    PrixdistinctionsComponent,
    NosproduitsComponent,
    NospartenairesComponent,
    LesreferencesComponent,
    FAQComponent,
    SupportTechniqueComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

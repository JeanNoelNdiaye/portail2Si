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
import { MessageVisiteurComponent } from './assistance/message-visiteur/message-visiteur.component';


// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    AssistanceComponent,
    NosServicesComponent,
    AccueilComponent,
    ServiceMarchePublicComponent,
    ServiceTicketingComponent,
    ServiceGestionBusComponent,
    AssistanceComponent,
    AccueilComponent,
    HeaderComponent,
    FooterComponent,
    MessageVisiteurComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

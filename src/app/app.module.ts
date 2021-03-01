import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AssistanceComponent } from './assistance/assistance.component';
import {HeaderComponent} from './layouts/header/header.component';
import {FooterComponent} from './layouts/footer/footer.component';



import { NosServicesComponent } from './nos-services/nos-services.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ServiceMarchePublicComponent } from './nos-services/service-marche-public/service-marche-public.component';
import { ServiceTicketingComponent } from './nos-services/service-ticketing/service-ticketing.component';
import { ServiceGestionBusComponent } from './nos-services/service-gestion-bus/service-gestion-bus.component';


@NgModule({
  declarations: [
    AppComponent,

    AssistanceComponent,


    NosServicesComponent,
    AccueilComponent,
    ServiceMarchePublicComponent,
    ServiceTicketingComponent,
    ServiceGestionBusComponent
    ServiceGestionBusComponent,
    AssistanceComponent,
    AccueilComponent,
    HeaderComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

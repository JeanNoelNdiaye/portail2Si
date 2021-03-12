import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssistanceComponent } from './assistance/assistance.component';
import {HeaderComponent} from './layouts/header/header.component';
import {FooterComponent} from './layouts/footer/footer.component';
import { NosServicesComponent } from './nos-services/nos-services.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AproposComponent } from './apropos/apropos.component';
import { PrixdistinctionsComponent } from './apropos/prixdistinctions/prixdistinctions.component';
import { NosproduitsComponent } from './apropos/nosproduits/nosproduits.component';
import { NospartenairesComponent } from './apropos/nospartenaires/nospartenaires.component';
import { LesreferencesComponent } from './apropos/lesreferences/lesreferences.component';
import {ServiceEsigmapComponent} from './nos-services/service-esigmap/service-esigmap.component';
import {ServiceEtransportComponent} from './nos-services/service-etransport/service-etransport.component';
import {ServiceEticketingComponent} from './nos-services/service-eticketing/service-eticketing.component';
import {FormsModule} from '@angular/forms';
// import { FAQComponent } from './assistance/faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    NosServicesComponent,
    AccueilComponent,
    ServiceEsigmapComponent,
    ServiceEticketingComponent,
    ServiceEtransportComponent,
    AssistanceComponent,
    AccueilComponent,
    HeaderComponent,
    FooterComponent,
    AproposComponent,
    PrixdistinctionsComponent,
    NosproduitsComponent,
    NospartenairesComponent,
    LesreferencesComponent,
    // FAQComponent

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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NosServicesComponent } from './nos-services/nos-services.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ServiceEsigmapComponent } from './nos-services/service-esigmap/service-esigmap.component';
import { ServiceEticketingComponent } from './nos-services/service-eticketing/service-eticketing.component';
import { ServiceEtransportComponent } from './nos-services/service-etransport/service-etransport.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NosServicesComponent,
    AccueilComponent,
    ServiceEsigmapComponent,
    ServiceEticketingComponent,
    ServiceEtransportComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

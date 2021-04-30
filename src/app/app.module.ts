import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
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
import {KeycloakSecurityService} from "./services-security/keycloak-security.service";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProduitComponent } from './administration/produit/produit.component';
import { ProduitDeleteDialogComponent } from './administration/produit/produit-delete-dialog/produit-delete-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {ProduitUpdateComponent} from "./administration/produit/produit-update/produit-update.component";
// import { FAQComponent } from './assistance/faq/faq.component';

export function kcFactory(kcSecurity:KeycloakSecurityService) {
  return ()=> kcSecurity.init()
}
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
    ProduitComponent,
    ProduitDeleteDialogComponent,
    ProduitUpdateComponent,
    // FAQComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [
    {provide: APP_INITIALIZER, deps: [KeycloakSecurityService], useFactory: kcFactory, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

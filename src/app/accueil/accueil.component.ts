import { Component, OnInit } from '@angular/core';
import {KeycloakSecurityService} from "../services-security/keycloak-security.service";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  constructor(public serviceSecurity: KeycloakSecurityService) { }

  ngOnInit(): void {
  }
  images = ['../assets/level1/img/photo-1.jpg', '../assets/level1/img/photo-2.jpg', '../assets/level1/img/photo-3.jpg'];

}

import { Component, OnInit } from '@angular/core';
import {KeycloakSecurityService} from "../../services-security/keycloak-security.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public serviceSecurity: KeycloakSecurityService) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.serviceSecurity.kc.login();
  }

  onRegister() {
    this.serviceSecurity.kc.register();
  }
}

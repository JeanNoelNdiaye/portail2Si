import { Injectable } from '@angular/core';
import {KeycloakInstance} from "keycloak-js"
declare var Keycloak:any

@Injectable({
  providedIn: 'root'
})
export class KeycloakSecurityService {
  public kc: KeycloakInstance

  constructor() { }

  async init(){
    this.kc = new Keycloak({
      url:"http://localhost:8081/auth",
      realm:"portail-2si",
      clientId:"portail2si-front",
    })

    await this.kc.init({
      // onLoad:'login-required'
      onLoad:'check-sso',
      // promiseType:'native'
    })
    // console.log(this.kc.token)
  }
}

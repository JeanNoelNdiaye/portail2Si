import {Component, Injectable, OnInit} from '@angular/core';
import {NosServicesService} from '../nos-services.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-service-gestion-bus',
  templateUrl: './service-etransport.component.html',
  styleUrls: ['./service-etransport.component.scss']
})
export class ServiceEtransportComponent implements OnInit {
  eTransport;
  idEtransport;
  constructor(private nosServicesService: NosServicesService,
              private router: Router) { }

  ngOnInit(): void {
    this.idEtransport = 2;
    // Recuperation de l'objet Etransport
    this.nosServicesService.findNosServices(this.idEtransport).subscribe(
      (data) => {
        this.eTransport = data;
      },
      (error) => {
        console.log('Erreur recuperation de l\'objet Etransport ');
      }
    );
  }

}

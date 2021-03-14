import { Component, OnInit } from '@angular/core';
import {NosServicesService} from './nos-services.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nos-services',
  templateUrl: './nos-services.component.html',
  styleUrls: ['./nos-services.component.scss']
})
export class NosServicesComponent implements OnInit {
eSigmap;
eSigmapcut;
eTransport;
eTicketing;
idEsigmap;
idEticketing;
idEtransport;

  constructor(private nosServicesService: NosServicesService, private router: Router) { }

  ngOnInit(): void {
    this.idEsigmap = 1;
    this.idEtransport = 2;
    this.idEticketing = 3;
    // Recuperation de l'objet Esigmap
    this.nosServicesService.findNosServices(this.idEsigmap).subscribe(
      (data) => {
        this.eSigmap = data;
        this.eSigmap.description = this.eSigmap.description.substring(0, 526);
      },
        (error) => {
        console.log('Erreur recuperation de l\'objet ESigmap ');
      }
  );
    // Recuperation de l'objet Etransport
    this.nosServicesService.findNosServices(this.idEtransport).subscribe(
      (data) => {
        this.eTransport = data;
      },
      (error) => {
        console.log('Erreur recuperation de l\'objet Etransport ');
      }
    );
  // Recuperation de l'objet Eticketing
    this.nosServicesService.findNosServices(this.idEticketing).subscribe(
      (data) => {
        this.eTicketing = data;
      },
      (error) => {
        console.log('Erreur recuperation de l\'objet Eticketing ');
      }
    );
  }

}

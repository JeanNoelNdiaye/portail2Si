import {Component, Injectable, OnInit} from '@angular/core';
import {NosServicesService} from '../nos-services.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-service-marche-public',
  templateUrl: './service-esigmap.component.html',
  styleUrls: ['./service-esigmap.component.scss']
})
export class ServiceEsigmapComponent implements OnInit {
  eSigmap;
  idEsigmap;


  constructor(private nosServicesService: NosServicesService,
              private router: Router
  ) { }


  ngOnInit(): void {
    this.idEsigmap = 1;
    // Recuperation de l'objet Esigmap
    this.nosServicesService.findNosServices(this.idEsigmap).subscribe(
      (data) => {
        this.eSigmap = data;
      },
      (error) => {
        console.log('Erreur recuperation de l\'objet ESigmap ');
      }
    );

  }

}

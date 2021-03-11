import {Component, Injectable, OnInit} from '@angular/core';
import {NosServicesService} from '../nos-services.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-service-ticketing',
  templateUrl: './service-eticketing.component.html',
  styleUrls: ['./service-eticketing.component.scss']
})
export class ServiceEticketingComponent implements OnInit {
  eTicketing;
  idEticketing;
  constructor(private nosServicesService: NosServicesService,
              private router: Router ) {
  }

  ngOnInit(): void {
    this.idEticketing = 3;
    // Recuperation de l'objet ETicketing
    this.nosServicesService.findNosServices(this.idEticketing).subscribe(
      (data) => {
        this.eTicketing = data;
      },
      (error) => {
        console.log('Erreur recuperation de l\'objet ETicketing ');
      }
    );
  }

}

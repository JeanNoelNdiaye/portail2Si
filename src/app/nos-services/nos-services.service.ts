import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NosServices} from './nos-services.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NosServicesService {
  dd;
  private urlWs = 'http://localhost:9090/portail';

  constructor(private Http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  public findNosServices(idNosServices): Observable <NosServices> {

    return this.Http.get<NosServices>(this.urlWs + '/service/' + idNosServices);

  }
}

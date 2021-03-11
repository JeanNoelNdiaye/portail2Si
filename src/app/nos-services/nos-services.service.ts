import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class NosServicesService {
  dd;
  private urlWs = 'http://localhost:9090/portail/api';

  constructor(private Http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  public findNosServices(idNosServices) {

    return this.Http.get<any>(this.urlWs + '/nosServices/' + idNosServices);

  }
}

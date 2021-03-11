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
  public listNosServices() {

    return this.Http.get<any>(this.urlWs + '/nosServices');

  }

  // tslint:disable-next-line:typedef
  public deleteNosServices(idNosServices) {

    return this.Http.delete<any>(this.urlWs + '/nosServices/' + idNosServices);

  }
  // tslint:disable-next-line:typedef
  public findNosServices(idNosServices) {

    return this.Http.get<any>(this.urlWs + '/nosServices/' + idNosServices);

  }
  // tslint:disable-next-line:typedef
  public addNosServices(nosServices, idtypeservice) {

    return this.Http.post<any>(this.urlWs + '/nosServices/typeservice/' + idtypeservice, nosServices);

  }

  // tslint:disable-next-line:typedef
  public editNosServices(idNosServices, nosServices, idtypeservice) {

    // @ts-ignore
    return this.Http.put<any>(this.urlWs + '/nosServices/' +  idNosServices + '/typeservice/' + idtypeservice, nosServices);

  }
}

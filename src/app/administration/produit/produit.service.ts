import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {IProduit} from "../model/produit.model";
import {Observable} from "rxjs";
import { createRequestOption } from "../util/request-util";

type EntityResponseType = HttpResponse<IProduit>;
type EntityArrayResponseType = HttpResponse<IProduit[]>;
@Injectable({
  providedIn: 'root'
})
// const SERVER_API_URL = process.env.SERVER_API_URL;
export class ProduitService {

  public resourceUrl ='http://localhost:9090/candidature';

  constructor(protected http: HttpClient) {}

  create(produit: IProduit): Observable<EntityResponseType> {
    return this.http.post<IProduit>(this.resourceUrl, produit, { observe: 'response' });
  }

  update(produit: IProduit): Observable<EntityResponseType> {
    return this.http.put<IProduit>(this.resourceUrl, produit, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IProduit>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IProduit[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  getCandidatures() {
    return this.http.get(this.resourceUrl);
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}

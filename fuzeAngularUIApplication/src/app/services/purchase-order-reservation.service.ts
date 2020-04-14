import { Injectable } from '@angular/core';
import { Config } from '../common/config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderReservationService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = Config.ZUUL_SERVICE + '/por';
   }

   getTerritories() {
     return this.http.get<any>(this.baseUrl + '/territories');
   }
}

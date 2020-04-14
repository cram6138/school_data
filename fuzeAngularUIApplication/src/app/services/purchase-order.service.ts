import { Injectable } from '@angular/core';
import { Config } from '../common/config';

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderService {

  baseUrl: string;

  constructor() {
    this.baseUrl = Config.ZUUL_SERVICE + '/pos';
   }
}

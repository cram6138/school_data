import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthenticationObj } from 'src/app/model/authenticationObj';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase-order-reservation',
  templateUrl: './purchase-order-reservation.component.html',
  styleUrls: ['./purchase-order-reservation.component.css']
})
export class PurchaseOrderReservationComponent implements OnInit {

  private currentUserSubject: BehaviorSubject<AuthenticationObj>;

  constructor(private cookeiService: CookieService,
              private router: Router) {
    this.currentUserSubject = new BehaviorSubject<AuthenticationObj>(JSON.parse(localStorage.getItem('currentUser')));
  }

  ngOnInit(): void {
    if (!this.currentUserSubject.value) {
      this.router.navigate(['/']);
    }
  }

}

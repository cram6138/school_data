import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthenticationObj } from 'src/app/model/authenticationObj';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit {

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

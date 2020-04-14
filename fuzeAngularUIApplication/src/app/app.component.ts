import { Component, OnChanges, SimpleChanges, ChangeDetectorRef, OnInit } from '@angular/core';
import { AuthenticationObj } from './model/authenticationObj';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { UserModel } from './model/user-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  user: UserModel;
  isLoggedIn: boolean;
  title = 'fuzeAngularUIApplication';

  private currentUserSubject: BehaviorSubject<AuthenticationObj>;

  constructor(private cookeiService: CookieService,
              private router: Router) {
    this.currentUserSubject = new BehaviorSubject<AuthenticationObj>(JSON.parse(localStorage.getItem('currentUser')));
  }

  ngOnInit() {
    if (!this.user && this.currentUserSubject.value) {
      this.user = this.currentUserSubject.value.userInfo;
    } else if (!this.currentUserSubject.value){
      this.router.navigate(['/']);
    }
  }

}

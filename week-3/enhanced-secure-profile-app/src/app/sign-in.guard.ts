/*
 *  Title: sign-in.guard.ts
 *  Author: Professor Krasso
 *  Modified By: April Yang
 *  Date: 11/03/2022
 *  Description: Assignment 3.4 - Guarding Routes
 */



import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {

  // added Router to the guards constructor
  constructor(private router: Router) {

}



  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      // define isLoggedIn variable
    let isLoggedIn = route.queryParams['isLoggedIn'];


   if(isLoggedIn) {
    return true;
  } else {
     this.router.navigate(['/']) // navigates users back to sign in if not logged in
     return false;
    }

  }

}

/*
 Title: sign-in.component.ts
 Author: Professor Krasso
 Modified By: April Yang
 Date: 11/03/2022
 Description: Assignment 3.4 - Guarding Routes- sign in component
 */



import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  isLoggedIn = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  signin() {
    this.isLoggedIn = true;

    this.router.navigate(['/home'], {queryParams:{isLoggedIn: this.isLoggedIn},skipLocationChange: true})
  }
}

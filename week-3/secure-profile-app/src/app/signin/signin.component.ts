/*
 Title: sign-in.component.ts
 Author: Professor Krasso
 Modified By: April Yang
 Date: 11/03/2022
 Description: Exercise 3.3 - Passing Data to Routes, Part 2
              sign in component
 */



import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  isLoggedIn = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  signin() {
    this.isLoggedIn = true;

    this.router.navigate(['/home'], {queryParams:{isLoggedIn: this.isLoggedIn},skipLocationChange: true})
  }
}

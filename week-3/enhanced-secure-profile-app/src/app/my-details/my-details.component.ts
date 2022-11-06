/*
   Title: my-details.component.ts
 Author: Professor Krasso
 Modified By: April Yang
 Date: 11/03/2022
 Description: Assignment 3.4 - Guarding Routes- My details component (Details view)
 */


import { Component, OnInit } from '@angular/core';


export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    "#TypeScript", `#${new Date().getFullYear()}`, "#CodingWithAngular", "#ngOmaha"
  ]

  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }

  toString() {
    console.log(`\n  Full name: ${this.fullName}\n  Favorite food: ${this.favoriteFood}\n  Favorite color: ${this.favoriteColor}`)
  }
}


@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {

  // set up myProfile variable and data type Person
  myProfile: Person;

  constructor() {
    this.myProfile = new Person("April Yang", "Fried Eggplants", "Yellow");
    this.myProfile.toString();


   }

  ngOnInit(): void {
  }

}

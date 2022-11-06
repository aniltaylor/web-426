/*
 *  Title: home.component.ts
 *  Author: Professor Krasso
 *  Modified By: April Yang
 *  Date: 11/03/2022
 *  Description: Exercise 3.3 - Passing Data to Routes, Part 2
 */



import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn: boolean;

  constructor(private route: ActivatedRoute) {
    this.isLoggedIn = Boolean(this.route.snapshot.queryParamMap.get('isLoggedIn'))
  }

  ngOnInit(): void {
  }

}

/*
 Title: app.component.ts
 Author: Professor Krasso
 Modified By: April Yang
 Date: 10/27/2022
 Description: App component
 */


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string = 'Exercise 2.4 – Routing in Action';
}

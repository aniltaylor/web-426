/*
 *  Title: app.routing.ts
 *  Author: Professor Krasso
 *  Modified By: April Yang
 *  Date: 11/03/2022
 *  Description: Exercise 3.3 - Passing Data to Routes, Part 2
 *               Routing file
 */


import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { SigninComponent } from "./signin/signin.component";

export const AppRoutes: Routes = [
  {
    path: '',
    component: SigninComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }



]

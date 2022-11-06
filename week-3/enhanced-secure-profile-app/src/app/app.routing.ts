/*
 *  Title: app.routing.ts
 *  Author: Professor Krasso
 *  Modified By: April Yang
 *  Date: 11/03/2022
 *  Description: Assignment 3.4 - Guarding Routes
 *               Routing file
 */


import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignInGuard } from "./sign-in.guard";

export const AppRoutes: Routes = [
  {
    path: '',
    component: SignInComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [SignInGuard]
  }

]

/*
 Title: composer-list.component.ts
 Author: Professor Krasso
 Modified By: April Yang
 Date: 11/2/2022
 Description:  Composer list component (displays a list of composers)
 */


import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class';



@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {
  // create a composer property
  composers: Array<IComposer>

  // composers array
  constructor() {
    this.composers = new Composer().getComposers();

  }

  ngOnInit(): void {
  }

}

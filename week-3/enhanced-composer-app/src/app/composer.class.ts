import { IComposer } from "./composer.interface";


export class Composer {
     composers:Array<IComposer> // new field (array), composers of type Array<IComposer>

  constructor() {
    this.composers = [
      {
         composerId:100, fullName:"Tian Dun", genre:"Contemporary Classical"
      },
      {
         composerId:101, fullName:"Johann Sebastian Bach", genre:"Classical"
      },
      {
         composerId:102, fullName:"Antonio Vivaldi", genre:"Classical"
      },
      {
         composerId:103, fullName:"Joseph Haydn", genre:"Classical"
      },
      {
         composerId:104, fullName:"Wolfgang Amadeus Mozart", genre:"Classical"
       }
    ]
  }

  getComposers() {
    // return 5 composers objects
    return this.composers;
  }

  getComposer(composerId: number) {
    // Loop over the composer array and return the object that matches the passed-in composerId
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    } return
  }

}

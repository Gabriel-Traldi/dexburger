import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BurguerService {

  burguers = [];

  constructor() { }

  addBurguer(burguer) {
    this.burguers.push(burguer);
  }

  removeBurguer() {
    // TODO: implement
  }
}

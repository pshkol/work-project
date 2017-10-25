import { Injectable } from '@angular/core';
import { stock } from '../data/stock';

@Injectable()
export class StockService {
  constructor() {

  }
  getData =  function() {
    return stock;
  }

  searchData(str) {
    let data = [];

    for (let i = 0; i < this.getData().length; i++) {
      if (this.getData()[i].nombre.toLowerCase().indexOf(str.toLowerCase()) != -1) {
        data.push(this.getData()[i]);
      }
    }

    return data;
  }
}

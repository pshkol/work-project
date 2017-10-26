import { Component, Output, EventEmitter } from '@angular/core';
import { StockService } from '../services/StockService';

@Component({
  selector: 'stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent {

  data: Array<Object>;
  searchedData: Array<Object>;
  modify: boolean;
  add: boolean;

  constructor(private stock: StockService) {
    this.data = this.stock.getData();
    this.modify = false;
    this.add = false;
  }

  searchStr(str) {
    this.searchedData = this.stock.searchData(str);
  }

  modifyData(id, nombre, stock) {
    if (id) {
      let data = this.stock.searchDataById(id);
      data.nombre = nombre;
      data.stock = stock;
    }

    this.modify = !this.modify;
  }

  addData (nombre, stock=0) {
    if (nombre) {
      this.stock.addData(nombre, stock);
    }

    this.add = !this.add;
  }
}

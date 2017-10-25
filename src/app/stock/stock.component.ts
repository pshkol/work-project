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

  constructor(private stock: StockService) {
    this.data = this.stock.getData();
    this.modify = false;
  }

  searchStr(str) {
    this.searchedData = this.stock.searchData(str);
  }

  modifyData() {
    this.modify = !this.modify;
  }
}

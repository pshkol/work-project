import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor() {
  }

  searchStr: string;

  @Output()
  search: EventEmitter<string> = new EventEmitter<string>();


}

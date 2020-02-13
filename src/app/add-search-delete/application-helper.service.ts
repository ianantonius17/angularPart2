import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationHelperService {

  title = 'angularPart2';
  data ;
  items = ['horse', 'cat', 'dog', 'mouse', 'home', 'money', 'chrome', 'safari', 'diamond'];
  showItem = [];
  searchQ: string;
  addItem: string;
  show: boolean;
  constructor() {
    console.log('Parent contructor');
  }

  putToList() {
    if (this.addItem !== '') {this.items.push(this.addItem); }
    this.show = false;
  }
  clearInput() {
    this.addItem = '';
  }
  searchWith() {
    this.showItem = [];


    for (const i of this.items) {
      if (i.startsWith(this.searchQ)) {
        this.showItem.push(i); }
    }
    this.show = true;
    this.searchQ = '';
  }

  remove(element){
    this.showItem.splice(this.showItem.indexOf(element), 1);
    this.items.splice(this.items.indexOf(element), 1);
  }

  getData() {
    return this.items;
  }

  getShowItem() {
    return this.showItem;
  }
}

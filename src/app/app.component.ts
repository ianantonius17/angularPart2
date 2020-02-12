import {
  Component,
  OnInit,
  OnDestroy,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  AfterContentChecked,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// tslint:disable-next-line:max-line-length
export class AppComponent implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
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

  putToList(){
    if(this.addItem !== '')
    {this.items.push(this.addItem);}
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
  ngOnInit(): void {
    console.log('Parent OnInit');
  }

  ngAfterContentChecked(): void {
    console.log('Parent AfterContentChecked');
  }

  ngAfterContentInit(): void {
    console.log('Parent AfterContentInit');
  }

  ngAfterViewChecked(): void {
    console.log('Parent AfterViewChecked');
  }

  ngAfterViewInit(): void {
    console.log('Parent AfterViewInit');
  }

  ngDoCheck(): void {
    console.log('Parent DoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Parent OnChanges');
  }

  ngOnDestroy(): void {
    console.log('Parent OnDestroy');
  }
}

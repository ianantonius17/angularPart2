import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck, OnChanges, OnDestroy,
  OnInit,
  SimpleChanges,

} from '@angular/core';

import { ApplicationHelperService } from './application-helper.service';

@Component({
  selector: 'app-add-search-delete',
  templateUrl: './add-search-delete.component.html',
  styleUrls: ['./add-search-delete.component.css']
})

export class AddSearchDeleteComponent implements OnInit, AfterViewChecked, AfterViewInit, AfterContentChecked, AfterContentInit,
  DoCheck, OnChanges, OnDestroy {

  title = 'angularPart2';
  data ;
  items ;
  showItem ;
  searchQ: string;
  addItem: string;
  element: string;
  show: boolean;
  putToList;
  clearInput;
  searchWith;
  remove;
  constructor(private applicationHelperService: ApplicationHelperService) {
    this.items = applicationHelperService.getData();
    this.showItem = applicationHelperService.getShowItem();
    this.putToList = applicationHelperService.putToList;
    this.clearInput = applicationHelperService.clearInput;
    this.searchWith = applicationHelperService.searchWith;
    this.remove = applicationHelperService.remove;
    console.log('Parent contructor');
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




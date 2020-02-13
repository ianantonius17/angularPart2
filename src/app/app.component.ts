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
import {ApplicationHttpService} from './http-assignment/application-http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// tslint:disable-next-line:max-line-length
export class AppComponent {

  title = 'angularPart2';
  page = 'home';
  router: Router;
  constructor() {
  }

  openSearchItem(){
    this.page = 'searchItem';
  }
  openHttpAssignment(){
    this.page = 'httpAssignment';
  }
  openHome(){
    this.page = 'home';
  }
}


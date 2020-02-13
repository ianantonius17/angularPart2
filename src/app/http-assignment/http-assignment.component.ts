import { Component, OnInit } from '@angular/core';
import {ApplicationHttpService} from './application-http.service';

@Component({
  selector: 'app-http-assignment',
  templateUrl: './http-assignment.component.html',
  styleUrls: ['./http-assignment.component.css']
})
export class HttpAssignmentComponent implements OnInit {

  title = 'angularPart2';
  name: any;
  dataArray = [];
  showData = [];
  getDataByTitle;
  keyword: any;

  constructor(private applicationHelperService: ApplicationHttpService) {
    this.getDataByTitle = applicationHelperService.getDataByTitle;
  }

  ngOnInit(): void {
    this.name = this.applicationHelperService.getUser().subscribe((data: any) => {
      console.log(data);
      this.dataArray = data;
      this.showData = this.dataArray;
    });



  }

}

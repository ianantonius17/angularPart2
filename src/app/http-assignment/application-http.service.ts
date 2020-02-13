import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ApplicationHttpService {

  dataArray = [];
  showData = [];
  keyword: any;
  constructor(private http: HttpClient) { }
  getUser(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getDataByTitle(){
    this.showData = [];
    for(const data of this.dataArray){
      if(data.title.startsWith(this.keyword)){
        this.showData.push(data);
      }
    }
  }
}

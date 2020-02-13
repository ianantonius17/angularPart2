import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyDirectiveDirective } from './my-directive.directive';
import { ChildComponent } from './child/child.component';
import {FormsModule} from '@angular/forms';
import { AddSearchDeleteComponent } from './add-search-delete/add-search-delete.component';
import { HttpAssignmentComponent } from './http-assignment/http-assignment.component';
import {HttpClientModule} from '@angular/common/http';
import { ApplicationHelperService } from './add-search-delete/application-helper.service';
import { ApplicationHttpService} from './http-assignment/application-http.service';
import { Router} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MyDirectiveDirective,
    ChildComponent,
    AddSearchDeleteComponent,
    HttpAssignmentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApplicationHelperService, ApplicationHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

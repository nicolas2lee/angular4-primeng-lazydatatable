import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import { HttpModule } from '@angular/http';
import {MultiSelectModule} from 'primeng/primeng';
import { AppComponent } from './app.component';
import {CarService} from "./service/car.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    DataTableModule,
    SharedModule,
    MultiSelectModule
  ],
  providers: [
    CarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

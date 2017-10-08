import {Component, OnInit} from "@angular/core";
import {CarService} from "./service/car.service";
import * as moment from "moment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cols: any;
  title = 'app';
  loading;
  cars;
  allCars;
  totalRecords;
  lastLazyLoadingMillisecondes = 0;
  public selectOptions ;
  selectedCities;

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.loading = true;
    this.selectOptions =[];
    this.cols = [
      {field: 'vin', header: 'Vin', filter: 'in'},
      {field: 'year', header: 'Year', filter: 'contains'},
      {field: 'brand', header: 'Brand', filter: 'in'},
      {field: 'color', header: 'Color', filter: 'in'}
    ];
    //setTimeout(() => {
      this.carService.getCarsSmall().subscribe(cars => {
        this.cars = cars.slice(0,20), this.totalRecords = 100, this.allCars = cars,
          this.setSelectOptions(cars),
        this.loading = false;
      })

    //}, 1000);

  }

  public loadCarsLazy(event: any) {
    console.log('lazy load');
    console.log(event)
    let currentMilliseconds = moment().valueOf()
    console.log(moment().valueOf());
    let delta = (currentMilliseconds - this.lastLazyLoadingMillisecondes)
    console.log('delta is '+ delta);
    if (delta < 1000){
      this.doAdelay()
    }
    if (this.allCars != undefined || this.allCars != null){
      setTimeout(() => {
        this.cars = this.allCars.slice(event.first, event.first+event.rows);
        console.log('what'+event.first+event.rows);
      }, 250);
    }

    this.lastLazyLoadingMillisecondes = currentMilliseconds;

    //setTimeout(() => {
/*      this.carService.getCarsSmall().subscribe(cars => {
        this.cars = cars,
          this.cars = cars.slice(event.first, event.first+event.rows),
          console.log(event.first+event.rows),
          this.loading = false;
      })*/

    //}, 300);
  /*  setTimeout(() => {
      if (this.datasource) {
        console.log(event.first)
        this.carsLarge = this.datasource.slice(event.first, (event.first + event.rows));
      }
    }, 250);*/
  }

  doAdelay() {
    setTimeout(function(){return true;},30000);

  }

  private setSelectOptions(cars) {
    console.log(cars)
    this.selectOptions = Object.create({});
    this.cols.forEach(col => {
      console.log(col)
      let x = cars.map(car => {
        console.log(car[col.field]);
         return car[col.field];
      });
      console.log(x);

      this.selectOptions[col.field] = [];
      Array.from(new Set(x)).forEach(a => this.selectOptions[col.field].push({label: a, value: a}));
      //this.selectOptions.push(hash);
    })
    console.log(this.selectOptions)
  }
}

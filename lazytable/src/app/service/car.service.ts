
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Car} from "../model/car.model";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';

@Injectable()
export class CarService {

  constructor(private http: Http) {}

  getCarsSmall () : Observable<Car[]> {
    return this.http.get('http://localhost:8080/cars/')
      .map(response => response.json() as Car[]);

  }
}

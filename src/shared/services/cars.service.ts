import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Car } from '../models/car.model';

@Injectable({
  providedIn: 'root',
})
export class CarService {

  private Car: Car;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(
    private http: HttpClient,
  ) {
  }

  public get(): Observable<Car[]> {
    return this.http.get<Car[]>('/assets/data/cars.json', this.httpOptions);
  }

  public setCar(Car: Car) {
    this.Car = Car;
  }

  public getCar() {
    return this.Car ? this.Car : null;
  }
}

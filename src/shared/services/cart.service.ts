import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public carsName: string[] = [];
  public count: number = 0;

  constructor() { }

  public addCar(name: string) {
    this._addCar(name);
  }

  private _addCar(name: string) {
    this.carsName.push(name);
    this._getCount();
  }

  private _getCount() {
    this.count = this.carsName.length;
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CarService } from '../../../shared/services/cars.service';
import { CartService } from '../../../shared/services/cart.service';
import { Car } from '../../../shared/models/car.model';

declare var UIkit: any;

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {

  public cars: Observable<Car[]>;
  public carSelected: Car;

  constructor(
    private carService: CarService,
    private cartService: CartService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.cars = this.carService.get();
  }

  carEdit(event, item: Car) {
    event.stopPropagation();
    if (item) {
      this.carService.setCar(item);
      this.carSelected = null;
      this.router.navigate(['/edit']);
    }
  }

  carAdd(event) {
    event.stopPropagation();
    this.carSelected = null;
    this.carService.setCar(null);
    this.router.navigate(['/add']);
  }

  carSelect(event, item) {
    event.stopPropagation();
    if (this.carSelected && this.carSelected.Name == item.Name) {
      this.carSelected = null;
    }
    else this.carSelected = item;
    return false;
  }

  addCart(event, name: string) {
    event.stopPropagation();
    this.cartService.addCar(name);
  }

  carDelete(event, carName: string): void {
    event.stopPropagation();
    if (carName) {
      console.log(carName);
      UIkit.modal.confirm('Are you sure?').then(function() {
        console.log('Confirmed.');
        this.carSelected = null;
      }, function () {
        console.log('Rejected.');
        this.carSelected = null;
      });
    }
  }
}

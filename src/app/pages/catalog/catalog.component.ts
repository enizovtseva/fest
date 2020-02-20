import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CarService } from '../../../shared/services/cars.service';
import { Observable } from 'rxjs';

import { Car } from '../../../shared/models/car.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogComponent implements OnInit {

  public cars: Observable<Car[]>;

  constructor(
    private carService: CarService,
  ) {
  }

  ngOnInit(): void {
    this.cars = this.carService.get();
  }
}

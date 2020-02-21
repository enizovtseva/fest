import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from '../../../shared/services/cars.service';
import { Observable } from 'rxjs';
import { Car } from '../../../shared/models/car.model';

declare var UIkit: any;

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
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.cars = this.carService.get();
  }

  carEdit(item) {
    this.router.navigate(['/edit']);
  }

  carAdd() {
    this.router.navigate(['/add']);
  }

  carDelete(carId: string): void {
    UIkit.modal.confirm('Are you sure?').then(function() {
      console.log('Confirmed.')
    }, function () {
        console.log('Rejected.')
    });
  }
}

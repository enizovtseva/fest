import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CarService } from '../../../shared/services/cars.service';
import { Car } from '../../../shared/models/car.model';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {

  public Car: Car;
  public carData: FormGroup;
  public showFormErrors = false;

  public CarName: string = '';

  constructor(
    private carService: CarService,
    private formBuilder: FormBuilder,
  ) {
    this.Car = this.carService.getCar();
    this.carData = this.formBuilder.group({
      id: [null, []],
      Name: [this.Car ? this.Car.Name : null, [Validators.required]],
      Year: [this.Car ? this.Car.Year : null, [Validators.required]],
      Origin: [this.Car ? this.Car.Origin : null, [Validators.required]],
      Price: [this.Car ? this.Car.Price : null, [Validators.required]],
      Currency: [this.Car ? this.Car.Currency : null, [Validators.required]],
      Displacement: [this.Car ? this.Car.Displacement : null, []],
      Horsepower: [this.Car ? this.Car.Horsepower : null, []],
      Miles_per_Gallon: [this.Car ? this.Car.Miles_per_Gallon : null, []],
      Cylinders: [this.Car ? this.Car.Cylinders : null, []],
      Acceleration: [this.Car ? this.Car.Acceleration : null, []],
      Weight_in_lbs: [this.Car ? this.Car.Weight_in_lbs : null, []],
    });
  }

  ngOnInit() {
  }

  SubmitCar() {
    if (this.carData.valid) {
    } else {
      this.showFormErrors = true;
    }
  }

}

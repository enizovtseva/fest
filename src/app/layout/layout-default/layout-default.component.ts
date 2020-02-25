import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-layout-default',
  templateUrl: './layout-default.component.html',
  styleUrls: ['./layout-default.component.scss']
})
export class LayoutDefaultComponent implements OnInit {

  constructor(
    public cartService: CartService,
  ) { }

  ngOnInit() {
  }

}

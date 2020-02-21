import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutDefaultComponent } from './layout/layout-default/layout-default.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { CarDetailsComponent } from './pages/car-details/car-details.component';

const routes: Routes = [
  { 
    path: '',
    component: LayoutDefaultComponent,
    children: [
      {
        path: '',
        component: CatalogComponent,
      }, {
        path: 'add',
        component: CarDetailsComponent,
      }, {
        path: 'edit',
        component: CarDetailsComponent,
      }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

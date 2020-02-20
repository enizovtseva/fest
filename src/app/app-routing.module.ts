import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutDefaultComponent } from './layout/layout-default/layout-default.component';
import { CatalogComponent } from './pages/catalog/catalog.component';

const routes: Routes = [
  { 
    path: '',
    component: LayoutDefaultComponent,
    children: [
      {
        path: '',
        component: CatalogComponent,
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

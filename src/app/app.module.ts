import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutDefaultComponent } from './layout/layout-default/layout-default.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { CarDetailsComponent } from './pages/car-details/car-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutDefaultComponent,
    CatalogComponent,
    CarDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

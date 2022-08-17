import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { CardCatalogComponent } from './card-catalog/card-catalog.component';
import { ContactComponent } from './contact/contact.component';
import { AngularYandexMapsModule } from 'angular8-yandex-maps';
import { MapsComponent } from './maps/maps.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { FooterComponent } from './common/footer/footer.component';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ReviewsComponent,
    CardCatalogComponent,
    ContactComponent,
    MapsComponent,
    DeliveryComponent,
    FooterComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [AngularYandexMapsModule],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



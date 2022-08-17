import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CardCatalogComponent } from './card-catalog/card-catalog.component';
import { ContactComponent } from './contact/contact.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { HomeComponent } from './home/home.component';
import { MapsComponent } from './maps/maps.component';
import { ReviewsComponent } from './reviews/reviews.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'catalog',
   children: [
    { path: 'rose', component: CardCatalogComponent },
    { path: 'all', component: CardCatalogComponent },
    { path: 'bouquet', component: CardCatalogComponent },
    { path: 'basket', component: CardCatalogComponent },
    { path: 'composition', component: CardCatalogComponent },
]   },
  { path: 'contact', component: ContactComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'delivery', component: DeliveryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

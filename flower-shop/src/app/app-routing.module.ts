import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CardCatalogComponent } from './pages/card-catalog/card-catalog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { HomeComponent } from './pages/home/home.component';
import { MapsComponent } from './common/maps/maps.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { PhotoGalleryComponent } from './pages/photo-gallery/photo-gallery.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'photo-gallery', component: PhotoGalleryComponent },
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

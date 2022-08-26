import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { CardCatalogComponent } from './pages/card-catalog/card-catalog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AngularYandexMapsModule } from 'angular8-yandex-maps';
import { MapsComponent } from './common/maps/maps.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { FooterComponent } from './common/footer/footer.component';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { AdvantagesImageComponent } from './common/advantages-image/advantages-image.component';
import { PhotoGalleryComponent } from './pages/photo-gallery/photo-gallery.component';
import { FeedbackComponent } from './modal/feedback/feedback.component';
import { ZoomPhotoComponent } from './modal/zoom-photo/zoom-photo.component';

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
    AdvantagesImageComponent,
    PhotoGalleryComponent,
    FeedbackComponent,
    ZoomPhotoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, [AngularYandexMapsModule]],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

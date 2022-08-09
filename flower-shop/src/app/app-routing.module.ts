import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CardCatalogComponent } from './card-catalog/card-catalog.component';
import { CardComponent } from './card/card.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MapsComponent } from './maps/maps.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { TopListComponent } from './top-list/top-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'top-list', component: TopListComponent },
  { path: 'card', component: CardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'catalog', component: CardCatalogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'maps', component: MapsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
